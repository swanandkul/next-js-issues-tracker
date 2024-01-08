const Checkbox = ({ onChange, labelText, defaultChecked }) => {
  return (
    <div className="flex text-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        name=""
        id=""
        onChange={onChange}
      />
      <label htmlFor={labelText}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
