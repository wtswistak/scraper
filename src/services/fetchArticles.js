import axios from "axios";

const fetchArticles = async (query) => {
  try {
    const response = await axios.post("http://localhost:7071/api/HttpTrigger", {
      query: query,
    });
    return response.data.articles;
  } catch (error) {
    console.error("Błąd podczas wysyłania zapytania:", error);
    throw error;
  }
};

export default fetchArticles;
