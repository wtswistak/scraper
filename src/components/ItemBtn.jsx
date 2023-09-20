import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useContext, useState } from "react";
import { ArticleContext } from "../contexts/articleContext";

function ItemBtn({ article }) {
  const { state, dispatch } = useContext(ArticleContext);
  const articlesCache = JSON.parse(localStorage.getItem("articles"));
  const isLikedCache = articlesCache?.some(
    (item) => item.title === article.title
  );
  const [isLiked, setIsLiked] = useState(isLikedCache ? true : false);

  function handleClick() {
    if (!isLiked) dispatch({ type: "add", payload: article });
    if (isLiked) dispatch({ type: "remove", payload: article });
    setIsLiked(!isLiked);
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
