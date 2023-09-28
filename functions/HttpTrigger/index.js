const NationalScraper = require("./src/scrapers/nationalScraper");
const WyborczaScraper = require("./src/scrapers/wyborczaScraper");

module.exports = async function (context, req) {
  const searchQuery = req.body.query;
  const isChecked = req.body.isChecked;
  const page = req.body.page;
  if (!searchQuery) return;

  try {
    const articles = [];
    const wyborczaScraper = new WyborczaScraper();
    const nationalScraper = new NationalScraper();

    const wyborczaArticles = await wyborczaScraper.scrape(
      searchQuery,
      isChecked,
      page
    );
    articles.push(...wyborczaArticles);
    const nationalArticles = await nationalScraper.scrape(
      searchQuery,
      isChecked,
      page
    );
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
