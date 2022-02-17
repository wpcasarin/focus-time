import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GlobalContext from '../context/GlobalContext';
import { Focus } from '../features/focus/Focus';
import { Timer } from '../features/timer/Timer';
import { colors } from '../utils/colors';

export const MainScreen = () => {
  const { focusSubject } = useContext(GlobalContext);

  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? <Timer /> : <Focus />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
