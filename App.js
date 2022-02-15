import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalProvider } from './src/context/GlobalContext';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';

function App() {
  const [focusSubject, setFocusSubject] = useState('café');

  return (
    <GlobalProvider>
      <SafeAreaView style={styles.container}>
        {focusSubject ? (
          <Timer focusSubject={focusSubject} />
        ) : (
          <Focus addSubject={setFocusSubject} />
        )}
      </SafeAreaView>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
