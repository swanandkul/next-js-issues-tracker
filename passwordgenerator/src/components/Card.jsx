const Card = ({ children }) => {
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      {children}
    </div>
  );
};

export default Card;
