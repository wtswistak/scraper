import axios from "axios";
import Form from "../components/ui/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { searchQuery } = useParams();

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const fetchData = async (query) => {
    try {
      const response = await axios.post(
        "http://localhost:7071/api/HttpTrigger",
        {
          query: query,
        }
      );
      const data = response.data;
      setSearchResults(data.articles);
    } catch (error) {
      console.error("Błąd podczas wysyłania zapytania:", error);
    }
  };

  const handleSearch = async (newSearchQuery) => {
    navigate(`/search/${newSearchQuery}`);
  };

  return (
    <div>
      <Form onSearch={handleSearch} />
      <ul className="grid grid-cols-4 max-w-[1680px] mx-auto">
        {searchResults.map((article, index) => (
          <li key={index} className="flex flex-col p-2">
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
