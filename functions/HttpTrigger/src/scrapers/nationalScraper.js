const axios = require("axios");
const cheerio = require("cheerio");

async function nationalScraper(searchQuery) {
  const url = `https://www.national-geographic.pl/search/articles?q=${encodeURIComponent(
    searchQuery
  )}&sort=_score&direction=desc`;
  const resposne = await axios.get(url);
  const html = resposne.data;
  const $ = cheerio.load(html);
  const articles = [];

  $(".col-md-6 ").each((index, element) => {
    const articleTitle = $(element).find("h2").text().trim();
    const articleLink = $(element).find(".type-content-").attr("href");
    const articleDate = $(element).find(".item-date").text();
    const articleImg = $(element).find("img").attr("src");

    // if (articleTitle.toLowerCase().includes(searchQuery.toLowerCase())) {

    articles.push({
      title: articleTitle,
      link: "https://www.national-geographic.pl" + articleLink,
      date: articleDate,
      img: articleImg,
    });
  });

  return articles;
}

module.exports = nationalScraper;
