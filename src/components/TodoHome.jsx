import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import Features from "./Features.jsx";

const TodoHome = () => {
  return (
    <div className="w-full h-fit p-2">
      <div className="flex items-center">
        <p>To Do </p>
        <RiArrowDropDownFill className="text-4xl"/>
      </div>
      <Features />
    </div>
  );
};

export default TodoHome;
