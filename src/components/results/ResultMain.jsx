import CardsList from "./CardstList";

function ResultMain({ searchResults, searchQuery }) {
  return (
    <div className="max-w-[1680px] m-auto mb-12">
      <p className="text-2xl px-4 py-2 mt-16 text-center max-sm:text-xl max-sm:mt-8">
        {searchResults?.length === 0
          ? `Brak artykułów dla frazy: ${searchQuery}`
          : `Artykuły dla frazy: ${searchQuery}`}
      </p>

      <CardsList searchResults={searchResults} />
      <div className="text-center">
        <button className="font-medium text-sm bg-[#124736] py-3 px-6 rounded-xl text-[#ececec] mt-4">
          Załaduj więcej
        </button>
      </div>
    </div>
  );
}

export default ResultMain;
