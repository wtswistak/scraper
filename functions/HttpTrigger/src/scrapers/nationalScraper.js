const axios = require("axios");
const cheerio = require("cheerio");

async function nationalScraper(searchQuery, isChecked) {
  const url = `https://www.national-geographic.pl/search/articles?q=${encodeURIComponent(
    searchQuery
  )}&sort=_score&direction=desc`;
  const resposne = await axios.get(url);
  const html = resposne.data;
  const $ = cheerio.load(html);
  const articles = [];
  // isChecked = true;
  $(".col-md-6 ").each((index, element) => {
    const articleTitle = $(element).find("h2").text().trim();
    const articleLink = $(element).find(".type-content-").attr("href");
    const articleDate = $(element).find(".item-date").text();
    const articleImg = $(element).find("img").attr("src");
    console.log(isChecked);
    // if (
    //   searchFilter &&
    //   articleTitle.toLowerCase().includes(searchQuery.toLowerCase())
    // ) {
    // }

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
    } else if (!isChecked) {
      // Jeśli searchQuery jest false, dodaj artykuł bez dodatkowej weryfikacji
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

module.exports = nationalScraper;
