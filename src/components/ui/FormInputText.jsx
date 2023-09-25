import { useContext } from "react";
import { InputQueryContext } from "../../contexts/InputQueryContext";

function FormInputText() {
  const { inputQuery, setInputQuery } = useContext(InputQueryContext);

  return (
    <input
      type="text"
      id="search"
      placeholder="Szukaj artykuły"
      value={inputQuery}
      onChange={(e) => setInputQuery(e.target.value)}
      className="text-lg px-5 py-4 min-w-[500px] rounded-l-full border-2 border-[#fff] duration-300 outline-none focus-within:border-[var(--primary-darker)] max-sm:w-full max-sm:min-w-0 max-sm:text-base max-sm:py-3"
      minLength={2}
      required
    />
  );
}

export default FormInputText;
