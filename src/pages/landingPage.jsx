import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "./loading";
import "./landingPage.css";
import chunkLogo from "../gif/logo.png";
import { categoryContext } from "../context/categoryContextProvider";

const LandingPage = () => {
  const categories = useContext(categoryContext);

  return (
    <div className="container">
      <img className="logo" src={chunkLogo} />
      <div>
        <Link className="freeSearch" to={`/query`}>
          Free Search
        </Link>
      </div>
      <p>Main categories</p>
      <div>
        {categories && categories.length > 0 ? (
          <div className="categoryContainer">
            {categories &&
              categories.map((category, index) => (
                <Link className="category" to={`/home/${category}`}>
                  {category}
                </Link>
              ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export default LandingPage;
