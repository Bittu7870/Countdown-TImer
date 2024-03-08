const ShowTImer = ({ handleReset, hours, seconds, minutes }) => {
  return (
    <>
      <div className="flex text-center items-center justify-center space-x-12 ">
        <div className="flex space-x-12 ">
          <span className="text-gray-500 text-center items-center text-7xl">
            {hours < 10 ? `0${hours}` : hours}
          </span>
          <span className="text-gray-500 text-center items-center text-7xl">
            :
          </span>
          <span className="text-gray-500 text-center items-center text-7xl">
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span className="text-gray-500 text-center items-center text-7xl">
            :
          </span>
          <span className="text-gray-500 text-center items-center text-7xl">
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
        <button className="bg-blue-600 p-8 rounded-xl text-xl text-white font-bold shadow-sm hover:shadow-xl hover:bg-blue-800">
          Pause
        </button>
        <button
          className="bg-blue-600 p-8 rounded-xl text-xl text-white font-bold shadow-sm hover:shadow-xl hover:bg-blue-800"
          onClick={handleReset}
        >
          Rest
        </button>
      </div>
    </>
  );
};

export default ShowTImer;
