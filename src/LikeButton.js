import "./Home.css";
import React, { useState } from "react";

const LikeButton = () => {
  const [like, setlike] = useState(1);
  const [likeActive, setLikeActive] = useState(false);

  function likeF() {
    if (likeActive) {
      setLikeActive(false);
      setlike(like - 1);
    } else {
      setLikeActive(true);
      setlike(like + 1);
    }
  }

  return (
    <>
      <button onClick={likeF} class="z-4 bg-purple hover:bg-greenish font-bold py-2 px-4 rounded inline-flex items-center w-40 h-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-30 w-30" viewBox="0 0 20 20">
          <path
            d="m64.634 31.685-.049.049c-.39-.448-.792-.889-1.219-1.316a25.989 25.989 0 0 0-36.754 36.754c.427.427.868.829 1.316 1.219l-.049.049 36.755 36.754 36.754-36.754a25.989 25.989 0 0 0-36.754-36.755z"
            fill="#f76363"
          />
          <path
            d="M25.374 68.408A27.739 27.739 0 0 1 64.6 29.181l.07.071a27.738 27.738 0 0 1 37.951 40.425l-9.391 9.39a1.749 1.749 0 0 1-2.474-2.474l9.39-9.391a24.239 24.239 0 1 0-34.275-34.279 1.832 1.832 0 0 1-1.32.535 1.774 1.774 0 0 1-1.283-.573 25.75 25.75 0 0 0-1.139-1.23 24.239 24.239 0 1 0-34.279 34.28c.4.4.81.773 1.228 1.138a1.758 1.758 0 0 1 .381.471l35.175 35.176 11.459-11.46a1.75 1.75 0 0 1 2.475 2.474l-12.7 12.7a1.752 1.752 0 0 1-2.475 0L26.642 69.677a1.772 1.772 0 0 1-.238-.3 23.37 23.37 0 0 1-1.03-.969zM85.4 86.9l1.583-1.584a1.75 1.75 0 0 0-2.476-2.474l-1.583 1.584A1.75 1.75 0 0 0 85.4 86.9z"
            fill="#13134c"
          />
        </svg>
        <span>Like {like}</span>
      </button>
    </>
  );
};

export default LikeButton;
