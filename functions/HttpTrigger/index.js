const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (context, req) {
  const searchQuery = req.query.query || (req.body && req.body.query);

  // if (!searchQuery) {
  //   context.res = {
  //     status: 400,
  //     body: "Brak wyszukiwania",
  //   };
  //   return;
  // }

  try {
    // const url = `https://www.wirtualnemedia.pl/wyniki/query:${encodeURIComponent(
    //   searchQuery
    // )}`;
    const url = `https://www.national-geographic.pl/search/articles?q=${encodeURIComponent(
      searchQuery
    )}&tab=articles`;

    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".col-md-6 ").each((index, element) => {
      // const articleTitle = $(element).find(".news-title").text().trim();
      // const articleLink = $(element).find(".subsite-box").attr("href");
      // const articleDate = $(element).find(".news-date").text();
      // const articleImg = $(element).find("img").attr("src");

      const articleTitle = $(element).find("h2").text().trim();
      const articleLink = $(element).find(".type-content-").attr("href");
      const articleDate = $(element).find(".item-date").text();
      const articleImg = $(element).find("img").attr("src");

      articles.push({
        title: articleTitle,
        link: "https://www.national-geographic.pl" + articleLink,
        date: articleDate,
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
