import { FiSearch } from "react-icons/fi";

function FormBtn() {
  return (
    <button
      type="submit"
      className="text-[26px] bg-[var(--primary-darker)] px-7 rounded-r-full text-[#fff] hover:bg-[#1d6d52] duration-200 max-sm:text-2xl "
    >
      <FiSearch />
    </button>
  );
}

export default FormBtn;
