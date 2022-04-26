import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRandomCategory } from "../services/apiCalls";
import { Link } from "react-router-dom";
import "./randomCategory.css";

const RandomCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    getRandomCategory(category).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="containerRandom">
      <div className="textContainer">
        <p className="randomCategory">
          <span>Category:</span> {data.categories}
        </p>
        <br />
        <div className="randomJoke">
          <span> Random Joke : </span>
          {data.value}
        </div>
        <Link className="buttonContainer" to="/home">
          {" "}
          Back to categories
        </Link>
      </div>
    </div>
  );
};
export default RandomCategory;
