const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const convertDate = require("../convertDate");
const ScraperFactory = require("./ScraperFactory");

class NationalScraper extends ScraperFactory {
  async scrape(searchQuery, isChecked) {
    const url = `https://wyborcza.pl/0,91794.html?offset=0&searchType=ARTICLE&query=${encodeURIComponent(
      searchQuery
    )}&orderBy=accuracy`;
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    const html = iconv.decode(response.data, "iso-8859-2");
    const $ = cheerio.load(html);
    const articles = [];

    $(".results__result").each((index, element) => {
      const articleTitle = $(element).find(".result__header-ref").attr("title");
      const articleLink = $(element).find(".result__header-ref").attr("href");
      const articleDate = $(element).find(".result__date").text();
      const articleImg = $(element).find("img").attr("src");

      if (!articleTitle) return;
      if (
        isChecked &&
        articleTitle.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        articles.push({
          title: articleTitle,
          link: articleLink,
          date: convertDate(articleDate),
          img: articleImg,
        });
      }
      if (!isChecked) {
        articles.push({
          title: articleTitle,
          link: articleLink,
          date: convertDate(articleDate),
          img: articleImg,
        });
      }
    });
    return articles;
  }
}

module.exports = NationalScraper;
