const RadioButton = ({ onClick, className }) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
      ></button>
    </>
  );
};

export default RadioButton;
