import { useContext, useEffect, useState } from "react";
import CardsList from "./CardsList";
import LoadMoreBtn from "./LoadMoreBtn";
import { useLocation, useParams } from "react-router-dom";
import { InputQueryContext } from "../../contexts/InputQueryContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import fetchArticles from "../../services/fetchArticles";
import LoadingLayout from "../../layouts/LoadingLayout";

function HomeMain({ isChecked, setIsChecked }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const { searchQuery } = useParams();
  const { inputQuery, setInputQuery } = useContext(InputQueryContext);
  const { state, dispatch } = useContext(ArticleContext);
  const location = useLocation();

  useEffect(() => {
    if (searchQuery) setIsLoading(true);
    if (location.pathname === "/" && inputQuery !== "") {
      setInputQuery("");
      setIsChecked(false);
    }
    setCount(1);
    dispatch({ type: "resetPage" });

    fetchArticles(searchQuery, isChecked)
      .then((articles) => {
        setSearchResults(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, location.search]);

  function handleLoadMore() {
    setIsLoading(true);
    setCount((count) => count + 1);
    fetchArticles(searchQuery, isChecked, state.page)
      .then((articles) => {
        setSearchResults((results) => [...results, ...articles]);
        dispatch({ type: "incrementPage" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <>
      {isLoading && <LoadingLayout />}
      {searchQuery && searchResults && (
        <main className="max-w-[1680px] m-auto mb-12">
          <p className="text-2xl px-4 py-2 mt-16 text-center max-sm:text-xl max-sm:mt-8">
            {searchResults?.length === 0
              ? `Brak artykułów dla frazy: ${searchQuery}`
              : `Artykuły dla frazy: ${searchQuery}`}
          </p>

          <CardsList searchResults={searchResults} />
          {searchResults.length > 28 * count ? (
            <div className="text-center">
              <LoadMoreBtn handleLoadMore={handleLoadMore} />
            </div>
          ) : null}
        </main>
      )}
    </>
  );
}

export default HomeMain;
