import Logo from "../assets/logo.decoration.svg";
import UserServices from "../services/UserServices.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserServices.register(fields);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.error.split(","));
      return;
    }
  };

  return (
    <div className="mx-8 mt-12">
      <div className="flex items-center flex-col">
        <img src={Logo} alt="Logo" className="h-60 w-60" />
        <h1 className="text-amber-950 font-bold text-lg">Registro</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          value={fields.name}
          name="name"
          type="text"
          placeholder="Nombre"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
          onChange={handleChange}
        />
        <input
          value={fields.email}
          name="email"
          type="text"
          placeholder="Correo electrónico"
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
          Registrarme
        </button>
        <ul className="list-disc text-left w-full pl-5">
          {error?.map((e, i) => (
            <li key={i} className="text-red-500 font-bold text-left text-sm">
              {e}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Register;
