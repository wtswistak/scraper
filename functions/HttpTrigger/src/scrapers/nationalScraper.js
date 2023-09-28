const axios = require("axios");
const cheerio = require("cheerio");
const ScraperFactory = require("./ScraperFactory");

class NationalScraper extends ScraperFactory {
  async scrape(searchQuery, isChecked, page) {
    const url = `https://www.national-geographic.pl/search/articles?q=${encodeURIComponent(
      searchQuery
    )}&sort=_score&direction=desc${page > 0 ? `&page=${++page}` : ""}`;
    const resposne = await axios.get(url);
    const html = resposne.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".col-md-6 ").each((index, element) => {
      const articleTitle = $(element).find("h2").text().trim();
      const articleLink = $(element).find(".type-content-").attr("href");
      const articleDate = $(element).find(".item-date").text();
      const articleImg = $(element).find("img").attr("src");

      if (
        isChecked &&
        articleTitle.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        articles.push({
          title: articleTitle,
          link: "https://www.national-geographic.pl" + articleLink,
          date: articleDate,
          img: articleImg,
        });
      }
      if (!isChecked) {
        articles.push({
          title: articleTitle,
          link: "https://www.national-geographic.pl" + articleLink,
          date: articleDate,
          img: articleImg,
        });
      }
    });

    return articles;
  }
}
module.exports = NationalScraper;
