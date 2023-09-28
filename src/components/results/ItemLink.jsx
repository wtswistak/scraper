function ItemLink({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-1 w-full text-sm bg-[var(--bg-card)] border-[var(--primary-darker)] border-2 rounded-l-md text-center text-[#000000] font-medium hover:bg-[var(--primary-darker)] hover:text-[#fff] duration-200"
    >
      Przejdź do artykułu
      <span className="text-lg "> &#187;</span>
    </a>
  );
}

export default ItemLink;
