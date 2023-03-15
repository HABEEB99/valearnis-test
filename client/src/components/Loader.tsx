import { ImSpinner } from "react-icons/im";

const Loader = () => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full mx-auto">
      <ImSpinner className="text-5xl animate-spin text-btn font-bold" />
      <small>Loading Question</small>
    </div>
  );
};

export default Loader;
