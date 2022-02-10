import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return <View style={styles.container}>{focusSubject ? null : null}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
