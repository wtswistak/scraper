import Form from "../components/ui/Form";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { InputQueryContext } from "../contexts/InputQueryContext";
import fetchArticles from "../services/fetchArticles";
import LoadingLayout from "../layouts/LoadingLayout";
import ResultMain from "../components/results/ResultMain";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { searchQuery } = useParams();
  const { inputQuery, setInputQuery } = useContext(InputQueryContext);
  const location = useLocation();

  useEffect(() => {
    if (searchQuery) setIsLoading(true);
    if (location.pathname === "/" && inputQuery !== "") setInputQuery("");

    fetchArticles(searchQuery, isChecked)
      .then((articles) => {
        setSearchResults(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      {isLoading && <LoadingLayout />}
      <div>
        <div className="flex justify-center py-24 bg-[var(--primary-color)] max-sm:py-16">
          <Form isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>

        {!isLoading && searchQuery && searchResults && (
          <ResultMain searchResults={searchResults} searchQuery={searchQuery} />
        )}
      </div>
    </>
  );
}

export default HomePage;
