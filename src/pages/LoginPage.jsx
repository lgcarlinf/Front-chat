import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { email, password, rememberMe } = form;
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const getEmailStorage = localStorage.getItem("email");
    if (getEmailStorage) {
      setForm({
        ...form,
        rememberMe: true,
        email: getEmailStorage,
      });
    }
  }, []);

  const onChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm({ ...form, [target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    rememberMe
      ? localStorage.setItem("email", email)
      : localStorage.removeItem("email");

    //llamar al backend
    const ok = await login(email, password);
    setForm({ ...form, email: "", password: "" });
    if (!ok) {
      errorAlert();
    }
  };

  const errorAlert = () => toast.error("Usuario o Contraseña Incorrecta");

  const isFullEmailAndPassword = () => {
    return email.length > 0 && password.length > 0 ? true : false;
  };

  return (
    <div className="loginbg">
      <div className="layer flex items-center justify-center">
        <div className="login flex-col  w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/4  h-auto items-center justify-between">
          <img
            src="./public/avatar.jpeg"
            alt=""
            className=" rounded-full w-[100px] h-[100px] m-auto"
          />
          <form
            onSubmit={onSubmit}
            className="formlogin flex-col items-center justify-evenly  h-[200px] my-4"
          >
            <h2 className="text-white text-center text-3xl font-extrabold mb-8">
              Hola Inicia Sesion!
            </h2>
            <div className="relative">
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                className=" w-full block text-left p-2 my-2 pl-14 rounded-3xl outline-none placeholder:font-bold"
              />
              <FaUserAlt className="absolute top-3 left-8 text-gray-800" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className=" w-full block text-left p-2  pl-14 my-2  rounded-3xl outline-none  placeholder:font-bold "
              />
              <FaLock className="absolute top-3 left-8 text-gray-800 " />
            </div>

            <div className="w-100 flex justify-between py-2">
              <label htmlFor="" className="flex font-bold">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={onChange}
                  className="block mr-2 "
                />
                Recordarme
              </label>

              <Link
                to="/register"
                className="font-bold text-white cursor-pointer"
              >
                Nueva Cuenta
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isFullEmailAndPassword()}
              className="p-3  w-full  bg-gray-800 hover:bg-black text-white font-bold mt-4 rounded-3xl cursor-pointer  disabled:cursor-not-allowed  disabled:bg-gray-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default LoginPage;
