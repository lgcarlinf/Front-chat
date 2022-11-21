import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";
import {
  scrollToBottomAnimated,
  scrollToBottom,
} from "../helpers/scrollToBottom";
import { types } from "../types/types";

const SideBarChatItem = ({ uid, nombre, status }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: uid,
    });

    const resp = await fetchConToken(`mensajes/${uid}`);
    dispatch({
      type: types.cargarMensajes,
      payload: resp.mensajes,
    });

    scrollToBottom("history-msg");
  };

  return (
    <div
      className={`flex w-100 justify-start items-center gap-6 p-4 border-b-[1px] ${
        chatActivo == uid ? "bg-[#f0f2f5]" : "bg-white"
      } border-b-slate-300 hover:bg-[#f0f2f5] cursor-pointer`}
      onClick={onClick}
    >
      <img
        src="./public/avatar.jpeg"
        alt=""
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex-col ">
        <p>{nombre}</p>
        {status ? (
          <p className=" text-[#009588]">Online</p>
        ) : (
          <p className=" text-red-500">Offline</p>
        )}
      </div>
    </div>
  );
};

export default SideBarChatItem;
