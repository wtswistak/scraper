import axios from "axios";
const key = import.meta.env.VITE_KEY;

async function fetchArticles(query, isChecked, page) {
  if (!query) return;
  try {
    const response = await axios.post(
      `https://app-scraper.azurewebsites.net/api/HttpTrigger?query=${query}&page=${page}&isChecked=${isChecked}&code=${key}`
    );
    if (response.data.articles.length < 4) return [];
    return response.data.articles;
  } catch (error) {
    console.error("Błąd podczas wysyłania zapytania:", error);
    throw error;
  }
}

export default fetchArticles;
