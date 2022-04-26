import React, { useState } from "react";
import { searchQuery } from "../services/apiCalls";
import ReactPaginate from 'react-paginate';
import style from "./queryPage.module.css";

const QueryPage = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [pageNumber,setPageNumber]=useState(0);

  const queryPerPage=8;
  const visitedpages= pageNumber * queryPerPage;
  const pageCount= Math.ceil(searchTerm && searchTerm.length /queryPerPage);
  console.log(searchTerm);
  const displayJoke= 
      searchTerm && searchTerm
            .slice(visitedpages, visitedpages+queryPerPage)
                .map((query, index)=>{return (  
                  <ul>
                    <li key={index}>
                      <span>
                        {" "}
                        <strong> Category:</strong>{" "}
                      </span>
                      {query.categories.length ? (
                      <span className={style.hasCategory}>{query.categories}</span>
                      ) : (
                        <span className={style.noCategory}>Does not mention </span>
                      )}
                      <br />
                      <br/>
                      <span>
                        <strong> Joke: </strong>
                      </span>
                      { query.value }
                    </li>
                  </ul>  
                )}
              )

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
    <div>
          <div className={style.queryContainer}>
          <div className={style.flexbox}>
            <div className={style.search}>
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
            <div className={style.result}>
            {searchTerm && searchTerm.length !==0 ? displayJoke : "Nothing has Found"}
            </div>
            
            {/* {displayJoke} */}
          </div>
          <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePage}
          containerClassName={style.paginationBttns}
          previousLinkClassName={style.previousBttns}
          nextLinkClassName={style.nextBttns}
          disabledClassName={style.paginationDisabled}
          activeClassName={style.paginationActive}/>
    </div>
  );
};
export default QueryPage;
