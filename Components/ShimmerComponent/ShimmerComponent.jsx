import React from "react";
import "./ShimmerComponent.css";

const ShimmerComponent = () => {
  return (
    <div className="cards-list">
      {Array(9)
        .fill("")
        .map((e, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <div className="shimmer"></div>
            </div>
          );
        })}
    </div>
  );
};

export default ShimmerComponent;
