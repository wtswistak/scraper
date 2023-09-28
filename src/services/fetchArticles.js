import axios from "axios";

async function fetchArticles(query, isChecked, page) {
  try {
    const response = await axios.post("http://localhost:7071/api/HttpTrigger", {
      query: query,
      isChecked: isChecked,
      page: page,
    });
    return response.data.articles;
  } catch (error) {
    console.error("Błąd podczas wysyłania zapytania:", error);
    throw error;
  }
}

export default fetchArticles;
