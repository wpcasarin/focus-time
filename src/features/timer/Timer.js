import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobalContext from '../../context/GlobalContext';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Progress } from '../../components/Progress';
import { Timming } from './Timming';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';

export const Timer = ({ focusSubject }) => {
  const { isStarted, setIsStarted, progress } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <Progress progress={progress} />
      <View style={styles.timmingContainer}>
        <Timming />
      </View>
      <View style={styles.buttonContainer}>
        {isStarted ? (
          <RoundedButton
            type="pause"
            size={170}
            onPress={() => setIsStarted(!isStarted)}
          />
        ) : (
          <RoundedButton
            type="play"
            size={170}
            onPress={() => setIsStarted(!isStarted)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  countdownContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  timmingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
});
