import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';

function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? null : <Focus addSubject={setFocusSubject} />}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
