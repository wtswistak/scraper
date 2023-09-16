import { MdFavoriteBorder } from "react-icons/md";

function ResultItem({ article, id }) {
  return (
    <li key={id} className="flex flex-col pb-4 bg-[#e4e4e4] rounded-md ">
      <img
        src={article.img}
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
  );
}

export default ResultItem;
