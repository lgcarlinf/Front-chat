import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import HeaderMessage from "./HeaderMessage";
import IncommingMessage from "./IncommingMessage";
import Loader from "./Loader";
import OutgoingMessage from "./OutgoingMessage";

const HistoryMessages = () => {
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);
  const { mensajes } = chatState;

  return (
    <div className="history-msg" id="history-msg">
      <HeaderMessage />
      <div className="p-4 mt-[56px] ">
        {mensajes.length !== 0 ? (
          mensajes.map((msg) => {
            if (msg.para === auth.uid) {
              return <IncommingMessage key={msg._id} msg={msg} />;
            } else {
              return <OutgoingMessage key={msg._id} msg={msg} />;
            }
          })
        ) : (
          <Loader position="top" />
        )}
      </div>
    </div>
  );
};

export default HistoryMessages;
