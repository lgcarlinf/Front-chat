import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const MenuSideBar = () => {
  const { logout } = useContext(AuthContext);

  const clickLogout = () => {
    logout();
  };

  return (
    <Menu placement="left">
      <MenuHandler>
        <Button variant="gradient" className="shadow-none">
          <BsThreeDotsVertical className="text-[#54656f] shadow-none" />
        </Button>
      </MenuHandler>
      <MenuList className="bg-white p-0 rounded-lg text-sm">
        <MenuItem
          className=" px-4 py-1 text-[#54656f] shadow-sm "
          onClick={clickLogout}
        >
          Salir
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuSideBar;
