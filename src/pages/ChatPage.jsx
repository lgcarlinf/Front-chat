import React, { useContext } from "react";
import Messages from "../components/Messages";
import SelectChat from "../components/SelectChat";
import SideBar from "../components/SideBar";
import { ChatContext } from "../context/chat/ChatContext";

const ChatPage = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className=" w-full flex h-[100vh] max-h-[100vh]">
      <SideBar />
      {chatState.chatActivo ? <Messages /> : <SelectChat />}
    </div>
  );
};

export default ChatPage;
