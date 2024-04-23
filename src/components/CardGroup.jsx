import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const CardGroup = ({ groupData, editButton, deleteButton, dropOutButton }) => {
  const {
    id,
    name,
    debt,
    participants,
  } = groupData;
  return (
    <div className="shadow-xl flex lg:w-4/12">
      <div className="flex m-4 rounded-md bg-indigo-200 size-20">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col m-2">
        <Link to={`/detail/${id}`}>
          <h2 className="font-bold text-lg">{name}</h2>
        </Link>
        <p>
          Debes: <span className="text-red-500">{debt}</span>
        </p>
        <p>Participantes: {participants}</p>
        <div className="flex gap-2">
          {editButton && (
            <button className="bg-amber-950 text-white rounded-md p-1">
              Editar
            </button>
          )}
          {deleteButton && (
            <button className="bg-amber-950 text-white rounded-md p-1">
              Eliminar
            </button>
          )}
          {dropOutButton && (
            <button className="bg-amber-950 text-white rounded-md p-1">
              Salir del grupo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
