function FormInput({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Szukaj artykuły"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="text-lg px-5 py-4 min-w-[500px] rounded-l-full border-2 border-[#fff] duration-300 outline-none focus-within:border-[var(--primary-darker)] max-sm:w-full max-sm:min-w-0 max-sm:text-base max-sm:py-3"
      required
    />
  );
}

export default FormInput;
