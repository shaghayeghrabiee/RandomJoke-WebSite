import React, { useState, useEffect, createContext } from "react";
import { getALLcategories} from "../services/apiCalls";

export const categoryContext = createContext();
const CategoryContextProvider = (props) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getALLcategories()
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <categoryContext.Provider value={categories}>
      {props.children}
    </categoryContext.Provider>
  );
};

export default CategoryContextProvider;
