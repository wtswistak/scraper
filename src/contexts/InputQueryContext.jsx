import React, { createContext, useState } from "react";

const InputQueryContext = createContext();

const InputQueryProvider = ({ children }) => {
  const [inputQuery, setInputQuery] = useState("");

  return (
    <InputQueryContext.Provider value={{ inputQuery, setInputQuery }}>
      {children}
    </InputQueryContext.Provider>
  );
};

export { InputQueryContext, InputQueryProvider };
