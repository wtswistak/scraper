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
        size={38}
        className="fixed bottom-5 text-[var(--bg-color)] font-bold bg-[#124736] p-2 right-5 rounded-3xl cursor-pointer hover:bg-[#0c2e21] duration-200  )"
      ></FiArrowUp>
    </button>
  );
}

export default ScrollUp;
