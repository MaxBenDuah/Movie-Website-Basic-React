import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import comedy from "../Comedies.js";
import family from "../Familymovies.js";
import thriller from "../Thrillers.js";

const App = function () {
  return (
    <>
      <Header />
      <Content comedyMovies={comedy} familyMovies={family} thrillerMovies={thriller}  />
      <Footer />
    </>
  );
}

export default App;