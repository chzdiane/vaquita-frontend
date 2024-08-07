import { Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-amber-950 text-white">
      <div className="flex py-4 px-3 justify-between">
        <div className="flex items-end gap-x-1">
          <img src={logo} alt="Mi Vaquita" />
          <Link to="/">
            <h1 className="flex justify-normal font-bold text-lg">
              Mi Vaquita
            </h1>
          </Link>
        </div>
        <button onClick={handleClick} >
          <FaUserCircle className="size-8" />
        </button>
      </div>
      <Menu />
    </header>
  );
};

const Menu = () => {
  return (
    <nav className="flex items-center justify-between w-9/12 mx-auto pb-2 text-white">
      <Link to="/friends">Amigos</Link>
      <Link to="/expenses">Gastos</Link>
      <Link to="/groups">Grupos</Link>
    </nav>
  );
};

export { Header };
