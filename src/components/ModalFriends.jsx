import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ModalFriends = ({ isOpen, handleSubmitFriend, externalError }) => {
  //const [friendName, setFriendName] = useState("");
  const [errorMessage, setErrorMessage] = useState(externalError || "");

  if (isOpen)
    return (
      <div className="flex bg-[rgba(0,0,0,0.5)] w-full h-full fixed top-0 left-0 items-center justify-center">
        <div className="h-72 w-72 bg-white flex flex-col rounded mx-5">
          <button
            className="self-end p-1"
            onClick={() => handleSubmitFriend && handleSubmitFriend(false)}
          >
            <IoCloseSharp />
          </button>
          <form onSubmit={handleSubmitFriend}>
            <h2 className="font-bold text-center text-lg">Grupo</h2>
            <ul className="border-slate-500 border-2 mx-8 pt-1 h-28 rounded flex justify-evenly flex-wrap mt-3">
              <li>
                <input type="checkbox" />
                <label>dianella@gmail.com</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>j@gmail.com</label>
              </li>
            </ul>
            <button
              type="submit"
              className="bg-amber-950 text-white mx-8 rounded mt-3 w-56 p-1"
            >
              Agregar
            </button>
            {errorMessage && (
              <p className="text-red-500 font-bold px-8 pb-3">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
};

export default ModalFriends;
