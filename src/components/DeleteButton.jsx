import { FaX } from "react-icons/fa6";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="text-veryDarkGrayishBlue1 hover:text-lightGrayishBlueHover"
      onClick={onClick}
    >
      {" "}
      <FaX />
    </button>
  );
};

export default DeleteButton;
