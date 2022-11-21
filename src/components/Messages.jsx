import React from "react";
import HistoryMessages from "./HistoryMessages";
import SendMessage from "./SendMessage";

const Messages = () => {
  return (
    <div className="flex-col justify-between w-1/2 h-[100vh] sm:w-2/3 relative msj-body  ">
      <HistoryMessages />
      <SendMessage />
    </div>
  );
};

export default Messages;
