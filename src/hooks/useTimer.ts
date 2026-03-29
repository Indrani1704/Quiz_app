import { useEffect, useState } from "react";

export const useTimer = (
  seconds: number,
  onEnd: () => void,
  trigger: number 
) => {
  const [time, setTime] = useState(seconds);


  useEffect(() => {
    setTime(seconds);
  }, [trigger, seconds]);

  useEffect(() => {
    if (time === 0) {
      onEnd();
      return;
    }

    const timer = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return time;
};