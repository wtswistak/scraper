import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!isVisible) return null;

  return (
    <button onClick={handleClick} title="Przewiń do góry">
      <FiArrowUp
        size={34}
        className="fixed bottom-5 text-[var(--bg-color)] font-bold bg-[#19644a] p-1 right-5 rounded-md cursor-pointer hover:bg-[#144936] duration-200  )"
      ></FiArrowUp>
    </button>
  );
}

export default ScrollUp;
