import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";

const HeaderMessage = () => {
  const { chatState } = useContext(ChatContext);
  const { chatActivo, usuarios } = chatState;

  const userActive =
    usuarios && usuarios.find((user) => user.uid === chatActivo);

  return (
    <div className="flex items-center w-full h-[56px] bg-[#f0f2f5] border-b-slate-300 border-b-[1px] absolute top-0">
      <div className=" flex items-center pl-4">
        <img
          src="./public/avatar.jpeg"
          alt=""
          className="w-[40px] h-[40px] rounded-full mr-2"
        />
        <p>{userActive.nombre}</p>
      </div>
    </div>
  );
};

export default HeaderMessage;
