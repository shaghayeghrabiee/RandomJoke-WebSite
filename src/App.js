import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import RandomCategory from "./pages/randomCategory";
import CategoryContextProvider from "./context/categoryContextProvider";
import QueryPage from "./pages/queryPage";

function App() {
  return (
    <div className="App">
      <CategoryContextProvider>
        <Routes>
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/home/:category" element={<RandomCategory />} />
          <Route path="/query" element={<QueryPage/>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </CategoryContextProvider>
    </div>
  );
}

export default App;
