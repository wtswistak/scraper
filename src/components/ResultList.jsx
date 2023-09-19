import ResultItem from "./ResultItem";

function ResultList({ searchResults, searchQuery }) {
  return (
    <div className="max-w-[1680px] m-auto">
      <p className="text-2xl px-4 py-2 mt-16 text-center max-sm:text-xl max-sm:mt-8">
        {searchResults?.length === 0
          ? `Brak artykułów dla frazy: ${searchQuery}`
          : `Artykuły dla frazy: ${searchQuery}`}
      </p>

      <ul className="grid items-stretch grid-cols-4 gap-4 gap-y-6 mb-20 mt-10  px-6 max-sm:grid-cols-1 max-lg:px-4 max-lg:grid-cols-2 max-2xl:grid-cols-3 max-sm:mt-4">
        {searchResults?.map((article, id) => (
          <ResultItem article={article} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
}

export default ResultList;
