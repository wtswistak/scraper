import { createContext, useReducer } from "react";

export const ArticleContext = createContext();

const initialState = {
  articles: JSON.parse(localStorage.getItem("articles")) || [],
  page: 1,
};

function articleReducer(state, action) {
  let updatedArticles;
  switch (action.type) {
    case "add":
      updatedArticles = [...state.articles, action.payload];
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      return {
        ...state,
        articles: updatedArticles,
      };
    case "remove":
      updatedArticles = state.articles.filter(
        (article) => article.title !== action.payload.title
      );
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      return {
        ...state,
        articles: updatedArticles,
      };
    case "incrementPage":
      return {
        ...state,
        page: state.page + 1,
      };
    case "resetPage":
      return {
        ...state,
        page: 1,
      };
    default:
      return state;
  }
}

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider value={{ state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};
