import Form from "../components/ui/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchArticles from "../services/fetchArticles";
import SearchResults from "../components/SearchResults";
import LoadingLayout from "../layouts/LoadingLayout";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchQuery } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetchArticles(searchQuery)
      .then((articles) => {
        setSearchResults(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  const handleSearch = async (newSearchQuery) => {
    navigate(`/search/${newSearchQuery}`);
  };

  return (
    <>
      {isLoading && <LoadingLayout />}
      <div>
        <div className="flex justify-center py-24 bg-[var(--primary-color)] max-sm:py-16">
          <Form onSearch={handleSearch} />
        </div>
        <SearchResults
          searchResults={searchResults}
          searchQuery={searchQuery}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default HomePage;
