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
      <ul className="grid grid-cols-2">
        {searchResults.map((article, index) => (
          <li key={index} className="flex p-2">
            <img src={article.img} alt={article.name} />
            <div>
              <h2 className="text-xl font-medium">{article.title}</h2>
              <span className="block text-sm">{article.date}</span>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Czytaj więcej
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
