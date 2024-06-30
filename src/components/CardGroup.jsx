import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const CardGroup = ({ groupData, editButton, deleteAction, dropOutButton }) => {
  const {
    id,
    name,
    debt,
    participants,
    color,
  } = groupData;

  const handleClickUpddate = () => {
    console.log("update");
  };

  return (
    <div className="shadow-xl flex lg:w-4/12">
      <div className="flex m-4 rounded-md size-20" style={{backgroundColor: color}}>
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
            <button onClick={handleClickUpddate} className="bg-amber-950 text-white rounded-md px-1 hover:bg-amber-800">
              Ver
            </button>
          )}
          {deleteAction && (
            <button onClick={deleteAction} className="bg-amber-950 text-white rounded-md px-1 hover:bg-amber-800">
              Abandonar
            </button>
          )}
          {dropOutButton && (
            <button className="bg-amber-950 text-white rounded-md px-1 hover:bg-amber-800">
              Eliminar grupo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
