import axios from "axios";
import Form from "../components/ui/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchArticles from "../services/fetchArticles";
import SearchResults from "../components/SearchResults";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const { searchQuery } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      fetchArticles(searchQuery).then((articles) => {
        setSearchResults(articles);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = async (newSearchQuery) => {
    navigate(`/search/${newSearchQuery}`);
  };

  return (
    <div>
      <Form onSearch={handleSearch} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default HomePage;
