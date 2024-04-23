import Button from "./Button";
import Logo from "../assets/logo.svg";

const CardExpenses = ({expensesData}) => {
    const {
        user,
        expense,
        concept,
        participated
    } = expensesData;
  return (
    <div className="shadow-xl flex">
      <div className="flex m-4 rounded-md bg-indigo-200 size-20">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col m-2">
        <p>
          <span className="text-amber-400">{user}</span>
          pagó ${expense} por {concept}
        </p>
        <p>{participated}</p>
        <div className="flex gap-2">
          <Button text="Editar" />
          <Button text="Eliminar" />
        </div>
      </div>
    </div>
  );
};

export default CardExpenses;