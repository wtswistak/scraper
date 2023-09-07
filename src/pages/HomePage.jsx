import axios from "axios";
import Form from "../components/ui/Form";
import { useState } from "react";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.post(
        "http://localhost:7071/api/HttpTrigger",
        {
          query: searchQuery,
        }
      );
      const data = response.data;
      setSearchResults(data.articles);
    } catch (error) {
      console.error("Błąd podczas wysyłania zapytania:", error);
    }
  };

  return (
    <div>
      <Form onSearch={handleSearch} />
      <ul>
        {searchResults.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Link do artykułu
            </a>
            <img src={article.img} alt={article.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
