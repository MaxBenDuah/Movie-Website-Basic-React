import React from "react";
import Comedy from "./Comedy";
import Family from "./Family";
import Thriller from "./Thriller";

const Content = function ({comedyMovies, familyMovies, thrillerMovies}) {
  return (
    <div>
      <h2>Comedy <i className="fa-solid fa-chevron-right"></i></h2>
      <ul className="comedy-movies">
        {comedyMovies.map(comedy => <Comedy key={comedy.name} comMovies={comedy} />)}
      </ul>

      <h2>Family <i className="fa-solid fa-chevron-right"></i></h2>
      <ul className="comedy-movies">
        {familyMovies.map(family => <Family key={family.name} famMovies={family} />)}
      </ul>

      <h2>Thriller <i className="fa-solid fa-chevron-right"></i></h2>
      <ul className="comedy-movies">
        {thrillerMovies.map(thriller => <Thriller key={thriller.name} thrillMovies={thriller} />)}
      </ul>
    </div>
  );
}

export default Content;