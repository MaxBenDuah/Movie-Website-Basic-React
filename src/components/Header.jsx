import React from "react";

const Header = function () {
  return (
    <>
      <div className="header">
        <h1>MaxFlix</h1>
        <div className="sign">
          <h4>Unlimited tv shows and movies</h4>
          <button className="btn join">Join now</button>
          <button className="btn sign-in">Sign In</button>
        </div>
      </div>

      <p className="description">Movies move us like nothing else can, whether they’re scary, funny,<br /> dramatic, romantic or anywhere in between. With so many titles to<br /> choose from, there's so much to experience. Here is a list of some<br /> of my <span className="fav">favourite</span> movies by category.</p>
    </>
  );
}

export default Header;