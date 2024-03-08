const InputTimer = ({ handleStart, handleInput }) => {
  return (
    <>
      <div className="flex text-center items-center justify-center space-x-8 ">
        <div>
          <input
            id="hours"
            onChange={handleInput}
            type="text"
            className="text-gray-500 text-center border-2 items-center text-7xl outline-none mx-4 w-40 h-40 "
            placeholder="HH"
          />

          <input
            id="minutes"
            onChange={handleInput}
            type="text"
            className="text-gray-500 text-center border-2 items-center text-7xl outline-none mx-4 w-40 h-40 "
            placeholder="MM"
          />

          <input
            id="second"
            onChange={handleInput}
            type="text"
            className="text-gray-500 text-center border-2 items-center text-7xl outline-none mx-4 w-40 h-40 "
            placeholder="SS"
          />
        </div>
        <button
          className="bg-blue-600 p-8 rounded-xl text-xl text-white font-bold shadow-sm hover:shadow-xl hover:bg-blue-800 "
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default InputTimer;
