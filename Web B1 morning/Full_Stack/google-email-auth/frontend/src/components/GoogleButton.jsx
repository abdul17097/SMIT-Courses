import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
    >
      <FcGoogle size={22} />
      <span className="font-medium">{text}</span>
    </button>
  );
};

export default GoogleButton;
