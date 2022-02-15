import { createContext, useState, useEffect, useRef } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // variables
  const interval = useRef(null);
  // methods
  const minutesToMillis = (min) => min * 60000;
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // do stuff
        return time;
      }
      const timeLeft = time - 1000;
      setProgress(timeLeft / minutesToMillis(minutes));
      return timeLeft;
    });
  };

  // states
  const [tempItem, setTempItem] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  // useEffect
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (!isStarted) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isStarted]);

  return (
    <GlobalContext.Provider
      value={{
        minutesToMillis,
        tempItem,
        setTempItem,
        isStarted,
        setIsStarted,
        progress,
        setProgress,
        setMinutes,
        millis,
        setMillis,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
