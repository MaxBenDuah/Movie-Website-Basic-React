import React from "react";

const Comedy = function ({comMovies}) {
  return (
    <li className="comedy-list">
      <img src={comMovies.img} alt="Comdey Movies" />
      <h3>{comMovies.name}</h3>
      <div>
        <p>{comMovies.year} &#183; {comMovies.duration}</p>
        <p>{comMovies.category} &#183; {comMovies["sub-category"]}</p>
      </div>
    </li>
  );
}

export default Comedy;