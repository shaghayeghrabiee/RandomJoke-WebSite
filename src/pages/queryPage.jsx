import React, { useState } from "react";
import { searchQuery } from "../services/apiCalls";
import ReactPaginate from 'react-paginate';
import "./queryPage.css";

const QueryPage = () => {
  const [searchTerm, setSearchTerm] = useState(0);
  const [pageNumber,setPageNumber]=useState(0);

  const JokePerPage=10;
  const visitedPage= (pageNumber*JokePerPage);
  console.log(searchTerm);
  const pageCount= searchTerm ?  Math.ceil(searchTerm.length/JokePerPage):0;

  const displayJoke=  searchTerm && searchTerm.slice(visitedPage, JokePerPage+visitedPage).map((query, index) =>
        {return (    <li key={index}>
          <span>
            {" "}
            <strong> Category:</strong>{" "}
          </span>
          {query.categories.length ? (
            <span className="hasCategory">{query.categories}</span>
          ) : (
            <span className="noCategory">Does not mention </span>
          )}
          <br />
          <br/>
          <span>
            <strong> Joke: </strong>
          </span>
          {query.value}
        </li>)})


  const showQuery = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    searchQuery(inputValue).then((res) => {
      console.log(res.data);
      setSearchTerm(res.data.result);
    });
  };
const handlePage=({selected})=>{
  setPageNumber(selected)
}
  return (
    <div className="queryContainer">
      <div class="flexbox">
        <div class="search">
          <h1>Search your random joke</h1>
          <h3>Click on search icon, then type your keyword.</h3>
          <div>
            <input
              type="text"
              placeholder="Search . . ."
              onChange={showQuery}
              required
            />
          </div>
        </div>
      </div>

      <ul>
      {displayJoke}
      <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       pageCount={"pageCount"}
       onPageChange={handlePage}
       containerClassName={"paginationBttns"}
       previousLinkClassName={"previousBttns"}
       nextLinkClassName={"nextBttns"}
       disabledClassName={"paginationDisabled"}
       activeClassName={"paginationActive"}/>
      </ul>
    </div>
  );
};
export default QueryPage;
// searchTerm &&
// searchTerm.map((query, index) => (
//   <li key={index}>
//     <span>
//       {" "}
//       <strong> Category:</strong>{" "}
//     </span>
//     {query.categories.length ? (
//       <span className="hasCategory">{query.categories}</span>
//     ) : (
//       <span className="noCategory">Does not mention </span>
//     )}
//     <br />
//     <br/>
//     <span>
//       <strong> Joke: </strong>
//     </span>
//     {query.value}
//   </li>
// ))
