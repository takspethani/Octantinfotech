import React from "react";
import right from "../assets/serviceImg/right-arrow.png";
function Button() {
  return (
    <div className="menu-btn flex justify-center py-9 ">
      <button className="text-xl tracking-wide flex gap-4 font-normal items-center px-16 py-2 text-white">
        Know Many More Service
        <span>
          <img src={right} alt="" />
        </span>
      </button>
    </div>
  );
}

export default Button;
