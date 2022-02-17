import { createContext, useState, useEffect, useRef } from 'react';
import { Vibration, Platform } from 'react-native';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  //constants
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  // variables
  const interval = useRef(null);
  // methods
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate, 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(PATTERN);
    }
  };
  const minutesToMillis = (min) => min * 60000;
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        vibrate();
        setFocusSubject(null);
        clearInterval(interval.current);
        setMillis(minutesToMillis(0));
        setProgress(1);
        setIsStarted(false);
        return time;
      }
      const timeLeft = time - 1000;
      setProgress(timeLeft / minutesToMillis(minutes));
      return timeLeft;
    });
  };

  // states
  const [focusSubject, setFocusSubject] = useState('café');
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
        focusSubject,
        setFocusSubject,
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
