import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <div className="bg-[var(--primary-color)]">
      <header className="flex justify-between max-w-[1680px] m-auto px-6 py-4 items-center text-[#fff]">
        <Link to="/" className="font-semibold">
          HOME
        </Link>
        <Link to="/liked" className="text-2xl">
          <MdFavoriteBorder />
        </Link>
      </header>
    </div>
  );
}

export default Header;
