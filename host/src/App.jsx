import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "layout/Header";
import Footer from "layout/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
