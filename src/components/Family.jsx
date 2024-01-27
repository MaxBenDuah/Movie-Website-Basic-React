import React from "react";

const Family = function ({famMovies}) {
  return (
    <li className="comedy-list">
      <img src={famMovies.img} alt="Family Movies" />
      <h3>{famMovies.name}</h3>
      <div>
        <p>{famMovies.year} &#183; {famMovies.duration}</p>
        <p>{famMovies.category} &#183; {famMovies["sub-category"]}</p>
      </div>
    </li>
  );
}

export default Family;