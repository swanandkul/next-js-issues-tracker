const Button = ({ onClick, buttonLabel }) => {
  return (
    <button
      className="outline-none bg-blue-800 text-white ml-1 px-3 py-0.5 shrink-0"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
