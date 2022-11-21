import React from "react";
import { horaMes } from "../helpers/horaMes";

const IncommingMessage = ({ msg }) => {
  return (
    <div className="p-3 py-2 flex w-full justify-start items-center">
      <img
        src="./avatar.jpeg"
        alt=""
        className="w-[50px] h-[50px] rounded-full mr-2"
      />
      <div className="flex-col">
        <div className="bg-white  text-[#111b21] rounded-md p-2">
          <p>{msg.mensaje} </p>
        </div>
        <span className="text-xs">{horaMes(msg.createdAt)}</span>
      </div>
    </div>
  );
};

export default IncommingMessage;
