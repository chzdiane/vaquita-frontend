import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.decoration.svg";
import { useState } from "react";
import UserServices from "../services/UserServices.js";
import { useAuth } from "../components/AuthContext.jsx";


const Login = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  const [fields, setFields] = useState({ email: "", password: "" });
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  //hacer que cuando sea incorrecto pintar error y manejar errores
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserServices.login(fields);
      localStorage.setItem("token", response.data.token);
      login(response.data.token);
      navigate("/");
    } catch (error) {
      logout();
      setError(error.response.data.error.split(","));
      return;
    }
  };

  return (
    <div className="mx-8 mt-12 flex flex-col items-center">
      <div className="flex items-center flex-col">
        <img src={Logo} alt="Logo" className="h-60 w-60" />
        <h1 className="text-amber-950 font-bold text-lg">Iniciar Sesión</h1>
      </div>
      <form className="flex flex-col items-center lg:w-4/12" onSubmit={handleSubmit}>
        <input
          value={fields.email}
          name="email"
          type="text"
          placeholder="Correo"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
          onChange={handleChange}
        />
        <input
          value={fields.password}
          name="password"
          type="password"
          placeholder="Contraseña"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-amber-950 text-white rounded-md p-1 m-1 w-full"
        >
          Ingresar
        </button>
        <Link className="w-full pb-2" to="/register">
          <button className="text-amber-950 border-amber-950 border rounded-md p-1 w-full">
            Registrarse
          </button>
        </Link>
        <ul className="list-disc text-left w-full pl-5">
          {error?.map((e, i) => (
            <li key={i} className="text-red-500 font-bold text-sm">
              {e}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Login;
