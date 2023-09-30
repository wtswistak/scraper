import axios from "axios";

async function fetchArticles(query, isChecked, page) {
  const key = import.meta.env.VITE_KEY;

  try {
    const response = await axios.post(
      `https://app-scraper.azurewebsites.net/api/HttpTrigger?query=${query}&page=${page}&isChecked=${isChecked}&code=${key}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Błąd podczas wysyłania zapytania:", error);
    throw error;
  }
}

export default fetchArticles;
