import React, { useState } from "react";
import FormInputText from "./FormInputText";
import FormBtn from "./FormBtn";
import FormInputCheck from "./FormInputCheck";

function Form({ onSearch, isChecked, setIsChecked }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }
  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <form onSubmit={handleSubmit} className="max-sm:w-full">
      <div className="flex shadow-lg rounded-full duration-200  mx-3 mb-4">
        <FormInputText
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FormBtn />
      </div>
      <FormInputCheck isChecked={isChecked} handleCheck={handleCheck} />
    </form>
  );
}

export default Form;
