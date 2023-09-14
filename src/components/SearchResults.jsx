import { MdFavoriteBorder } from "react-icons/md";

function SearchResults({ searchResults, searchQuery, isLoading }) {
  return (
    <ul className="grid items-stretch grid-cols-4 gap-4 gap-y-6 max-w-[1680px] mx-auto my-20 px-6 max-sm:grid-cols-1 max-lg:px-4 max-lg:grid-cols-2 max-2xl:grid-cols-3 ">
      {searchResults.length === 0 && searchQuery && !isLoading ? (
        <p>Brak wyników dla artykułu:{searchQuery}</p>
      ) : (
        searchResults.map((article, index) => (
          <li
            key={index}
            className="flex flex-col pb-4 bg-[#e4e4e4] rounded-md "
          >
            <img
              src={article.img}
              alt={article.name}
              className="rounded-t-md"
            />
            <div className="p-4 pb-2 h-full flex flex-col justify-between ">
              <div>
                <h2 className="text-xl font-medium text-[#2f2f2f] mb-2 max-lg:text-lg">
                  {article.title}
                </h2>
                <span className="block text-sm mb-6 ">{article.date}</span>
              </div>
              <div className="flex">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1 w-full text-sm bg-[var(--bg-card)] border-[var(--primary-darker)] border-2 rounded-l-md text-center text-[#000000] font-medium hover:bg-[var(--primary-darker)] hover:text-[#fff] duration-200"
                >
                  Przejdź do artykułu
                  <span className="text-lg "> &#187;</span>
                </a>
                <button className="text-2xl p-1 px-2 bg-[var(--primary-darker)] border-[var(--primary-darker)] text-[#fff] ml-1 rounded-r-md hover:bg-[#1a624a]  duration-200 ">
                  <MdFavoriteBorder />
                </button>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default SearchResults;
