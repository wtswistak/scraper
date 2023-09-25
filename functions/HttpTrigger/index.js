const nationalScraper = require("./src/scrapers/nationalScraper");
const wyborczaScraper = require("./src/scrapers/wyborczaScraper");

module.exports = async function (context, req) {
  const searchQuery = req.body.query;
  const isChecked = req.body.isChecked;
  if (!searchQuery) return;

  try {
    const articles = [];
    const wyborczaArticles = await wyborczaScraper(searchQuery, isChecked);
    articles.push(...wyborczaArticles);
    const nationalArticles = await nationalScraper(searchQuery, isChecked);
    articles.push(...nationalArticles);

    const data = {
      searchQuery: searchQuery,
      articles: articles,
    };
    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "myCookie=myValue; SameSite=None; httpOnly",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Wystąpił błąd podczas scrapowania danych: " + error.message,
    };
  }
};
