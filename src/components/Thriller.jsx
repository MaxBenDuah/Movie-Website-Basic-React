import React from "react";

const Thriller = function ({thrillMovies}) {
  return (
    <li className="comedy-list">
      <img src={thrillMovies.img} alt="Thriller Movies" />
      <h3>{thrillMovies.name}</h3>
      <div>
        <p>{thrillMovies.year} &#183; {thrillMovies.duration}</p>
        <p>{thrillMovies.category} &#183; {thrillMovies["sub-category"]}</p>
      </div>
    </li>
  );
}

export default Thriller;