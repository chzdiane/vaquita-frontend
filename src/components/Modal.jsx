import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, handleSubmitGroup, externalError }) => {
  const [groupName, setGroupName] = useState("");
  const [errorMessage, setErrorMessage] = useState(externalError || "");
  const [color, setColor] = useState("#6366F1");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(handleSubmitGroup){
      if (groupName.trim() === "") {
        setErrorMessage("Elige un nombre para continuar");
        return;
      }
      if (groupName.length > 30) {
        setErrorMessage("El nombre no puede tener más de 30 caracteres");
        return;
      }
      handleSubmitGroup({ name: groupName, color });
    }
  };

  const handleColorClick = (e) => {
    e.preventDefault();
    const color = e.target.id;
    setColor(color);
  };

  useEffect(() => {
    setErrorMessage(externalError || "");
  }, [externalError]);

  if (isOpen)
    return (
      <div className="flex bg-[rgba(0,0,0,0.5)] w-full h-full fixed top-0 left-0 items-center justify-center">
        <div className="h-72 w-72 bg-white flex flex-col rounded mx-5">
          <button className="self-end p-1" onClick={() => handleSubmitGroup && handleSubmitGroup(false)}>
            <IoCloseSharp />
          </button>
          <form onSubmit={handleSubmit} className="">
            <h2 className="font-bold text-center text-lg">Crear nuevo grupo</h2>
            <input
              type="text"
              placeholder="Nombre del grupo"
              value={groupName}
              maxLength="30"
              onChange={(e) => setGroupName(e.target.value)}
              className="mx-8 border-2 rounded border-slate-500 w-56 mt-3"
            />
            <div className="border-slate-500 border-2 mx-8 pt-1 h-28 rounded flex justify-evenly flex-wrap mt-3">
              <button
                id="#6366F1"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-indigo-500 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#22C55E"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-green-500 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#78350F"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-amber-900 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#A5F3FC"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-cyan-200 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#FFFFFF"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-white border-2 focus:border-slate-500"
              ></button>
              <button
                id="#F97316"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-orange-500 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#FBCFE8"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-pink-200 border-2 focus:border-slate-500"
              ></button>
              <button
                id="#EF4444"
                onClick={handleColorClick}
                className="h-10 w-10 m-1 bg-red-500 border-2 focus:border-slate-500"
              ></button>
            </div>
            <button
              type="submit"
              className="bg-amber-950 text-white mx-8 rounded mt-3 w-56 p-1"
            >
              Crear
            </button>
            {errorMessage && (
              <p className="text-red-500 font-bold px-8 pb-3">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
};

export default Modal;
