function LoadMoreBtn({ handleLoadMore }) {
  return (
    <button
      className="font-medium text-sm bg-[#124736] py-3 px-6 rounded-xl text-[#ececec] mt-4"
      onClick={handleLoadMore}
    >
      Załaduj więcej
    </button>
  );
}

export default LoadMoreBtn;
