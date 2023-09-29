function LoadMoreBtn({ handleLoadMore }) {
  return (
    <button
      className="font-medium text-sm bg-[#18694d] py-3 px-6 rounded-3xl duration-200 text-[#ececec] mt-4 hover:bg-[#185341]"
      onClick={handleLoadMore}
    >
      Załaduj więcej
    </button>
  );
}

export default LoadMoreBtn;
