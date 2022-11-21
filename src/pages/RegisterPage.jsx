import React, { useState, useContext } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [formRegister, setFormRegister] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const { auth, register } = useContext(AuthContext);

  const { nombre, email, password } = formRegister;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await register(nombre, email, password);

    if (ok) {
      successAlert();
    } else {
      errorAlert();
    }
    setFormRegister({
      nombre: "",
      email: "",
      password: "",
    });
  };

  const successAlert = () => toast.success("Registro Completado!");
  const errorAlert = () => toast.error("El usuario ya esta registrado");
  const isFieldsFull = () => {
    return nombre.length && email.length > 0 && password.length > 0
      ? true
      : false;
  };

  return (
    <div className="loginbg">
      <div className="layer flex items-center justify-center">
        <div className="login flex-col  w-1/2 sm:w-5/12 md:w-1/3 lg:w-1/4  h-auto items-center justify-between">
          <img
            src="https://res.cloudinary.com/dhtyfvv9i/image/upload/v1669012327/avatar_jgglnn.jpg"
            alt=""
            className=" rounded-full w-[100px] h-[100px] m-auto"
          />
          <form
            onSubmit={handleSubmit}
            className="formlogin flex-col items-center justify-evenly  h-[200px] my-4"
          >
            <h2 className="text-white text-center text-3xl font-extrabold mb-8">
              Hola Registrate!
            </h2>

            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              className=" w-full block text-center p-2 my-2  rounded-3xl outline-none placeholder:font-bold"
            />

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className=" w-full block text-center p-2 my-2  rounded-3xl outline-none placeholder:font-bold"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className=" w-full block text-center p-2 my-2  rounded-3xl outline-none  placeholder:font-bold "
            />

            <div className="w-100 flex justify-end">
              <Link to="/login" className="font-bold text-white cursor-pointer">
                Ya tengo cuenta
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isFieldsFull()}
              className="p-3  w-full  bg-gray-800 hover:bg-black text-white font-bold mt-4 rounded-3xl cursor-pointer disabled:bg-gray-800 disabled:cursor-not-allowed"
            >
              Registrate
            </button>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default RegisterPage;
