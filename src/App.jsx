import { useEffect, useState } from "react";
import "./App.css";
import ShowTImer from "./components/ShowTImer";
import InputTimer from "./components/InputTimer";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (
      hours < 0 ||
      minutes < 0 ||
      seconds < 0 ||
      (hours === 0 && minutes === 0 && seconds === 0)
    ) {
      alert("Invalid Input");
      return;
    }
    setIsStart(true);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
    setIsStart(false);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResumed = () => {
    setIsPaused(false);
    runTimer();
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer = () => {
    if (seconds > 0) {
      setSeconds((s) => s - 1);
    } else if (seconds === 0 && minutes > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (minutes === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (seconds === 0 && minutes === 0 && hours === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(timerId);
      setIsStart(false);
      alert("Timed out");
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer();
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);
  return (
    <>
      <h1 className="text-8xl text-center mb-8 ">Countdown Timer</h1>
      {!isStart && (
        <InputTimer handleStart={handleStart} handleInput={handleInput} />
      )}
      {isStart && (
        <ShowTImer
          handleReset={handleReset}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isPaused={isPaused}
          handlePause={handlePause}
          handleResumed={handleResumed}
        />
      )}
    </>
  );
};

export default App;
