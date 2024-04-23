import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, setIsOpen }) => {
  if (isOpen)
    return (
      <div className="flex bg-[rgba(0,0,0,0.5)] w-full h-full fixed top-0 left-0 items-center justify-center">
        <div className="h-72 w-72 bg-white flex flex-col rounded mx-5 justify-between">
          <button className="self-end p-1" onClick={() => setIsOpen(false)}>
            <IoCloseSharp />
          </button>
          <h2 className="font-bold text-center text-lg">Crear nuevo grupo</h2>
          <input
            type="text"
            placeholder="Nombre del grupo"
            maxLength="30"
            className="mx-8 border-2 rounded border-slate-400"
          />
          <div className="border-slate-400 border-2 mx-8 pt-1 h-28 rounded flex justify-evenly flex-wrap">
            <button className="h-10 w-10 m-1 bg-indigo-500 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-green-500 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-amber-900 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-cyan-200 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-white border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-orange-500 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-pink-200 border-2 focus:border-slate-400"></button>
            <button className="h-10 w-10 m-1 bg-red-500 border-2 focus:border-slate-400"></button>
          </div>
          <button className="bg-amber-950 text-white mx-8 rounded">
            Crear
          </button>
          <p className="text-red-500 font-bold px-8 pb-3">Elige un nombre para continuar</p>
        </div>
      </div>
    );
};

export default Modal;
