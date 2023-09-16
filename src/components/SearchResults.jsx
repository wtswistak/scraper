import ResultItem from "./ResultItem";

function SearchResults({ searchResults, searchQuery, isLoading }) {
  return (
    <div>
      {searchResults?.length === 0 && searchQuery && !isLoading ? (
        <p className="text-2xl max-w-[1680px] m-auto px-4 py-8 text-center">
          Brak wyników dla artykułu: {searchQuery}
        </p>
      ) : (
        <ul className="grid items-stretch grid-cols-4 gap-4 gap-y-6 max-w-[1680px] mx-auto my-20 px-6 max-sm:grid-cols-1 max-lg:px-4 max-lg:grid-cols-2 max-2xl:grid-cols-3">
          {searchResults?.map((article, id) => (
            <ResultItem article={article} id={id} key={id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
