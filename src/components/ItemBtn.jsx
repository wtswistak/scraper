import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { ArticleContext } from "../contexts/ArticleContext";

function ItemBtn({ article }) {
  const { dispatch } = useContext(ArticleContext);
  const articlesCache = JSON.parse(localStorage.getItem("articles"));
  const [isLiked, setIsLiked] = useState(() =>
    articlesCache?.some((item) => item.title === article.title)
  );

  useEffect(() => {
    setIsLiked(articlesCache?.some((item) => item.title === article.title));
  }, [articlesCache, article.title]);

  function handleClick() {
    if (!isLiked) dispatch({ type: "add", payload: article });
    else dispatch({ type: "remove", payload: article });
  }

  return (
    <button
      className="text-2xl p-1 px-2 bg-[var(--primary-darker)] border-[var(--primary-darker)] text-[#fff] ml-1 rounded-r-md hover:bg-[#1a624a] duration-200 "
      onClick={handleClick}
    >
      {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
    </button>
  );
}

export default ItemBtn;
