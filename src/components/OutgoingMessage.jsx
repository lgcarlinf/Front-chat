import React from "react";
import { horaMes } from "../helpers/horaMes";

const OutgoingMessage = ({ msg }) => {
  return (
    <div className="flex w-full justify-end p-3 py-2">
      <div className="flex-col">
        <div className="bg-[#d9fdd4] text-[#111b21] rounded-md p-2">
          <p>{msg.mensaje}</p>
        </div>
        <span className="text-xs">{horaMes(msg.createdAt)}</span>
      </div>
    </div>
  );
};

export default OutgoingMessage;
