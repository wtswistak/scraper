import ItemLink from "./ItemLink";
import ItemBtn from "./ItemBtn";

function ResultItem({ article, id }) {
  return (
    <li key={id} className="flex flex-col pb-4 bg-[#e4e4e4] rounded-md ">
      <img
        src={article.img ? article.img : "../../public/image-error.jpg"}
        alt={article.name}
        className="rounded-t-md aspect-video "
      />
      <div className="p-4 pb-2 h-full flex flex-col justify-between ">
        <div>
          <h2 className="text-xl font-medium text-[#2f2f2f] mb-2 max-lg:text-lg">
            {article.title}
          </h2>
          <span className="block text-sm mb-6 ">{article.date}</span>
        </div>
        <div className="flex">
          <ItemLink article={article} />
          <ItemBtn article={article} />
        </div>
      </div>
    </li>
  );
}

export default ResultItem;
