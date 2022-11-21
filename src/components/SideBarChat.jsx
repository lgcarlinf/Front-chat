import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import Loader from "./Loader";
import SideBarChatItem from "./SideBarChatItem";

const SideBarChat = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="flex-col w-100 h-[92vh] overflow-scroll">
      <div>
        {chatState.usuarios.length !== 0 ? (
          chatState.usuarios
            .filter((chat) => chat.uid !== auth.uid)
            .map((chat) => (
              <SideBarChatItem
                key={chat.uid}
                uid={chat.uid}
                nombre={chat.nombre}
                status={chat.online}
              />
            ))
        ) : (
          <Loader position="top" />
        )}
      </div>
      <div className="text-center text-[#54656f] p-4 ">
        {"Tus mensajes estan seguros (:"}
      </div>
    </div>
  );
};

export default SideBarChat;
