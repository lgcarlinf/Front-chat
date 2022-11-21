import React from "react";

const Loader = ({ position }) => {
  return (
    <div
      className={` w-full flex h-[100vh] max-h-[100vh] ${
        position ? "mt-10" : "items-center"
      } justify-center`}
    >
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Loader;
