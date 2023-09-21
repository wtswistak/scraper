import axios from "axios";

async function fetchArticles(query, isChecked) {
  try {
    const response = await axios.post("http://localhost:7071/api/HttpTrigger", {
      query: query,
      isChecked: isChecked,
    });
    return response.data.articles;
  } catch (error) {
    console.error("Błąd podczas wysyłania zapytania:", error);
    throw error;
  }
}

export default fetchArticles;
