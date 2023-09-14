function SearchResults({ searchResults, searchQuery, isLoading }) {
  return (
    <ul className="grid grid-cols-4 max-w-[1680px] mx-auto">
      {searchResults.length === 0 && searchQuery ? (
        <p>Brak wyników dla artykułu:{searchQuery}</p>
      ) : (
        searchResults.map((article, index) => (
          <li key={index} className="flex flex-col p-2">
            <img src={article.img} alt={article.name} />
            <div>
              <h2 className="text-xl font-medium">{article.title}</h2>
              <span className="block text-sm">{article.date}</span>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Czytaj więcej
              </a>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default SearchResults;
