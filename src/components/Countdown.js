import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 60000;
const formatTime = (time) => time.toString().padStart(2, '0');

export const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const interval = useRef(null);
  const minute = Math.floor(millis / 60000) % 60;
  const second = Math.floor(millis / 1000) % 60;
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // do stuff
        return time;
      }
      const timeLeft = time - 1000;
      //report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <Text style={styles.countdown}>
      {formatTime(minute)}:{formatTime(second)}
    </Text>
  );
};

const styles = StyleSheet.create({
  countdown: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: colors.white,
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: spacing.lg,
  },
});
