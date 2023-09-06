const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const searchQuery = req.query.query || (req.body && req.body.query);

  if (!searchQuery) {
    context.res = {
      status: 400,
      body: "Brak frazy wyszukiwania w żądaniu.",
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers":
      //     "Origin, X-Requested-With, Content-Type, Accept",
      // },
    };
    return;
  }

  try {
    const url = `https://www.amazon.pl/s?k=${encodeURIComponent(searchQuery)}`;

    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const products = [];
    $(".s-result-item").each((index, element) => {
      const productName = $(element).find(".a-size-base-plus").text().trim();
      const productPrice = $(element).find(".a-offscreen").text();
      const productLink = $(element).find(".a-link-normal").attr("href");
      const productImg = $(element).find(".s-image").attr("src");

      if (
        productName
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      ) {
        products.push({
          name: productName,
          price: productPrice,
          link: "https://www.amazon.pl" + productLink,
          img: productImg,
        });
      }
    });
    const data = {
      searchQuery: searchQuery,
      products: products,
    };

    context.res = {
      status: 200,
      body: data,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers":
      //     "Origin, X-Requested-With, Content-Type, Accept",
      // },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Wystąpił błąd podczas scrapowania danych: " + error.message,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers":
      //     "Origin, X-Requested-With, Content-Type, Accept",
      // },
    };
  }
};
