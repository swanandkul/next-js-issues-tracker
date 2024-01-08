const Input = ({ currentRef, type, placeholder, value, readOnly }) => {
  return (
    <input
      className="outline-none w-full py-1 px-3"
      type={type}
      name=""
      id=""
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      ref={currentRef}
    />
  );
};

export default Input;
