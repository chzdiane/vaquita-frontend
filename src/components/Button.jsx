const Button = ({onClick, text}) => {
    return (
      <button className="bg-amber-950 text-white p-1 rounded-md hover:bg-amber-800" onClick={onClick}>
        {text}
      </button>
    );
  };
  
export default Button;