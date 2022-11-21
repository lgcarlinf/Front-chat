import React from "react";
import { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AuthContext } from "../auth/AuthContext";
import MenuSideBar from "./MenuSideBar";
import SideBarChat from "./SideBarChat";

const SideBar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="flex-col w-1/2 sm:w-1/3 h-[100vh] border-r-slate-300 border-r-[1px]  ">
      <div className="flex w-full justify-between p-4 border-b-[1px] border-b-slate-300 bg-[#f0f2f5]">
        <p className="text-[#54656f] font-bold">{auth.name}</p>
        <MenuSideBar />
      </div>
      <SideBarChat />
    </div>
  );
};

export default SideBar;
