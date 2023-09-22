import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <div className="bg-[var(--primary-color)]">
      <header className="flex justify-between max-w-[1680px] m-auto px-6 py-4 items-center text-[#fff] max-sm:px-4">
        <Link
          to="/"
          className="font-semibold px-1 hover:text-[#e6e6e6] duration-200"
        >
          HOME
        </Link>
        <Link
          to="/liked"
          className="text-2xl p-1 hover:text-[#e6e6e6] duration-200"
        >
          <MdFavoriteBorder />
        </Link>
      </header>
    </div>
  );
}

export default Header;
