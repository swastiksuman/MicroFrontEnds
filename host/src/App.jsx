import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.scss";
import Header from "layout/Header";
import Footer from "layout/Footer";
import Recipe from "pages/Recipe";
import Recipes from "pages/Recipes";


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/recipes/:slug" element={<Recipe />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
