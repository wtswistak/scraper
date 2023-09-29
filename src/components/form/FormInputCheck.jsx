function FormInputCheck({ isChecked, handleCheck }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="filter"
        checked={isChecked}
        onChange={handleCheck}
        className="ml-3 mr-1 accent-[#2d9470] w-5 h-5 cursor-pointer"
      />
      <label
        htmlFor="filter"
        className="text-[#f3f3f3] mr-3 font-medium text-lg max-sm:text-base "
      >
        Wyszukiwanie dokładne
      </label>
    </div>
  );
}

export default FormInputCheck;
