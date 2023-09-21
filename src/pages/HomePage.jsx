import Form from "../components/ui/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchArticles from "../services/fetchArticles";
import ResultList from "../components/ResultList";
import LoadingLayout from "../layouts/LoadingLayout";

function Homepage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { searchQuery } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) setIsLoading(true);

    fetchArticles(searchQuery, isChecked)
      .then((articles) => {
        setSearchResults(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);
  console.log(isChecked);

  const handleSearch = async (newSearchQuery) => {
    navigate(`/search/${newSearchQuery}`);
  };

  return (
    <>
      {isLoading && <LoadingLayout />}
      <div>
        <div className="flex justify-center py-24 bg-[var(--primary-color)] max-sm:py-16">
          <Form
            onSearch={handleSearch}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>

        {!isLoading && searchQuery && searchResults && (
          <ResultList
            searchResults={searchResults}
            searchQuery={searchQuery}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}

export default Homepage;
