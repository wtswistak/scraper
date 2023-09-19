const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

module.exports = async function (context, req) {
  const searchQuery = req.query.query || (req.body && req.body.query);
  if (!searchQuery) return;
  try {
    console.log(searchQuery);
    const urlFirst = `https://www.national-geographic.pl/search/articles?q=${encodeURIComponent(
      searchQuery
    )}&tab=articles`;
    const urlSecond = `https://wyborcza.pl/0,91794.html?offset=0&searchType=ARTICLE&query=${encodeURIComponent(
      searchQuery
    )}&orderBy=accuracy`;

    const articles = [];
    const responseFirst = await axios.get(urlFirst);
    const htmlFirst = responseFirst.data;
    const $first = cheerio.load(htmlFirst);

    $first(".col-md-6 ").each((index, element) => {
      const articleTitle = $first(element).find("h2").text().trim();
      const articleLink = $first(element).find(".type-content-").attr("href");
      const articleDate = $first(element).find(".item-date").text();
      const articleImg = $first(element).find("img").attr("src");

      // if (articleTitle.toLowerCase().includes(searchQuery.toLowerCase())) {

      articles.push({
        title: articleTitle,
        link: "https://www.national-geographic.pl" + articleLink,
        date: articleDate,
        img: articleImg,
      });
    });

    const responseSecond = await axios.get(urlSecond, {
      responseType: "arraybuffer",
    });
    const htmlSecond = iconv.decode(responseSecond.data, "iso-8859-2");
    const $Second = cheerio.load(htmlSecond);

    $Second(".results__result").each((index, element) => {
      const articleTitle = $Second(element)
        .find(".result__header-ref")
        .attr("title");
      const articleLink = $Second(element)
        .find(".result__header-ref")
        .attr("href");
      const articleDate = $Second(element).find(".result__date").text();
      const articleImg = $Second(element).find("img").attr("src");

      if (!articleTitle) return;
      articles.push({
        title: articleTitle,
        link: articleLink,
        date: articleDate.split("|")[0],
        img: articleImg,
      });
    });

    const data = {
      searchQuery: searchQuery,
      articles: articles,
    };

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
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
