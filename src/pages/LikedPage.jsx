import ResultItem from "../components/ResultItem";

function LikedPage() {
  const articlesCache = JSON.parse(localStorage.getItem("articles"));

  return (
    <div className="max-w-[1680px] m-auto">
      <p className="mt-16  mx-6 text-3xl">Polubione artykuły</p>
      <ul className="grid items-stretch grid-cols-4 gap-4 gap-y-6 mb-20 mt-8  px-6 max-sm:grid-cols-1 max-lg:px-4 max-lg:grid-cols-2 max-2xl:grid-cols-3 max-sm:mt-4">
        {articlesCache?.map((article, id) => (
          <ResultItem article={article} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
}

export default LikedPage;
