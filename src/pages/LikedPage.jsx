import { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import CardsList from "../components/results/CardsList";

function LikedPage() {
  const articlesCache = JSON.parse(localStorage.getItem("articles"));
  const { state } = useContext(ArticleContext);

  return (
    <main className="max-w-[1680px] m-auto">
      <p className="mt-16 mx-6 text-3xl max-md:text-xl max-lg:mx-4">
        {state.articles.length
          ? `Polubione artykuły: ${state.articles.length}`
          : "Brak polubionych artykułów"}
      </p>
      <CardsList searchResults={articlesCache} />
    </main>
  );
}

export default LikedPage;
