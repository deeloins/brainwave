import { loading } from "../assets";

const Generate = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-4 sm:px-6 bg-n-8/80 rounded-[1.7rem] whitespace-nowrap ${
        className || ""
      } text-sm sm:text-base`}
    >
      <img className="w-5 h-5 mr-3" src={loading} alt="loading..." />
      AI is generating
    </div>
  );
};

export default Generate;
