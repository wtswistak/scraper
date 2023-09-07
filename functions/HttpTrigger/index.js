const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const searchQuery = req.query.query || (req.body && req.body.query);

  if (!searchQuery) {
    context.res = {
      status: 400,
      body: "Brak frazy wyszukiwania w żądaniu.",
    };
    return;
  }

  try {
    const url = `https://www.wirtualnemedia.pl/wyniki/query:${encodeURIComponent(
      searchQuery
    )}`;

    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const articles = [];

    $(".subsite-news-box-item").each((index, element) => {
      const articleTitle = $(element).find(".news-title").text().trim();
      const articleLink = $(element).find(".subsite-box").attr("href");
      const articleImg = $(element).find("img").attr("src");

      articles.push({
        title: articleTitle,
        link: "https://www.wirtualnemedia.pl" + articleLink,
        img: articleImg,
      });
    });
    const data = {
      searchQuery: searchQuery,
      articles: articles,
    };

    context.res = {
      status: 200,
      body: data,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Wystąpił błąd podczas scrapowania danych: " + error.message,
    };
  }
};
