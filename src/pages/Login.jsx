import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.decoration.svg";
import { useState } from "react";
import UserServices from "../services/UserServices.js";

const Login = () => {

  const navigate = useNavigate();
  const [fields, setFields] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  //hacer que cuando sea incorrecto pintar error y manejar errores
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await UserServices.login(fields);
    localStorage.setItem("token", response.data.token);
    navigate("/");
  };

  return (
    <div className="mx-8 mt-12"> 
      <div className="flex items-center flex-col">
        <img src={Logo} alt="Logo" className="h-60 w-60" />
        <h1 className="text-amber-950 font-bold text-lg">Iniciar Sesión</h1>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="Correo" className="border border-amber-950 rounded-md p-1 m-2 w-full" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" className="border border-amber-950 rounded-md p-1 m-2 w-full" onChange={handleChange}/>
        <button className="bg-amber-950 text-white rounded-md p-1 m-1 w-full">Ingresar</button>
        <Link to="/register">
        <button type="submit" className="text-amber-950 border-amber-950 border rounded-md p-1 w-full">Registrarse</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
