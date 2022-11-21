import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";

const SendMessage = () => {
  const [mensaje, setMensaje] = useState("");
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);
  const { socket } = useContext(SocketContext);
  const { chatActivo } = chatState;

  const onChange = ({ target }) => {
    setMensaje(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mensaje.length === 0) {
      return;
    }

    setMensaje("");
    socket.emit("mensaje-personal", {
      de: auth.uid,
      para: chatActivo,
      mensaje,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#f1f2f5] p-4 w-full flex justify-evenly"
    >
      <input
        type="text"
        className="w-10/12 outline-0 py-1 rounded-md px-3"
        value={mensaje}
        onChange={onChange}
      />
      <button
        type="submit"
        className="w-1/12 bg-[#009588] rounded-md text-white"
      >
        Enviar
      </button>
    </form>
  );
};

export default SendMessage;
