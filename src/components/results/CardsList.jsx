import CardItem from "./CardItem";

function CardsList({ searchResults }) {
  return (
    <ul className="grid items-stretch grid-cols-4 gap-4 gap-y-6 mb-10 mt-10  px-6 max-sm:grid-cols-1 max-lg:px-4 max-lg:grid-cols-2 max-2xl:grid-cols-3 max-sm:mt-4">
      {searchResults?.map((article, id) => (
        <CardItem article={article} id={id} key={id} />
      ))}
    </ul>
  );
}

export default CardsList;
