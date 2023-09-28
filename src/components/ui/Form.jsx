import React, { useContext } from "react";
import { InputQueryContext } from "../../contexts/InputQueryContext";
import { useNavigate } from "react-router-dom";
import FormBtn from "./FormBtn";
import FormInputText from "./FormInputText";
import FormInputCheck from "./FormInputCheck";

function Form({ isChecked, setIsChecked }) {
  const { inputQuery } = useContext(InputQueryContext);
  const navigate = useNavigate();

  async function handleSearch(newSearchQuery) {
    navigate(`/search/${newSearchQuery}?sort=${isChecked}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(inputQuery);
  }

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <form onSubmit={handleSubmit} className="max-sm:w-full">
      <div className="flex shadow-lg rounded-full duration-200  mx-3 mb-4">
        <FormInputText />
        <FormBtn />
      </div>
      <FormInputCheck isChecked={isChecked} handleCheck={handleCheck} />
    </form>
  );
}

export default Form;
