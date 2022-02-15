import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';

import GlobalContext from '../context/GlobalContext';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const Countdown = () => {
  const { millis } = useContext(GlobalContext);

  const formatTime = (time) => time.toString().padStart(2, '0');
  const minute = Math.floor(millis / 60000) % 60;
  const second = Math.floor(millis / 1000) % 60;

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
