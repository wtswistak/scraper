import React, { useState } from "react";
import axios from "axios";
import ProductSearchForm from "./ProductSearchForm";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.post(
        "http://localhost:7071/api/HttpProductTrigger",
        {
          query: searchQuery,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json", // Lub inny odpowiedni nagłówek
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers":
        //       "Origin, X-Requested-With, Content-Type, Accept",
        //   },
        // }
      );
      const data = response.data;
      setSearchResults(data.products);
    } catch (error) {
      console.error("Błąd podczas wysyłania zapytania:", error);
    }
  };

  return (
    <div>
      <ProductSearchForm onSearch={handleSearch} />
      <ul>
        {searchResults.map((product, index) => (
          <li key={index}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              Link do produktu
            </a>
            <img src={product.img} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
