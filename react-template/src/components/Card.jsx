import React from "react";

function Card({ src, title }) {
  console.log(src);
  return (
    <>
      <div className="main">
        <div className="img1">
          <img src={require("./ex.jpg")} alt="card image" />
          <div className="title">
            <h3>{title}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat.
            </p>
            <button>watch now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
