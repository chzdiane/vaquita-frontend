import Logo from "../assets/logo.decoration.svg";

const Register = () => {
  return (
    <div className="mx-8 mt-12">
      <div className="flex items-center flex-col">
        <img src={Logo} alt="Logo" className="h-60 w-60" />
        <h1 className="text-amber-950 font-bold text-lg">Registro</h1>
      </div>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-amber-950 rounded-md p-1 m-2 w-full"
        />
        <button className="bg-amber-950 text-white rounded-md p-1 m-1 w-full">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Register;
