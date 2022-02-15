import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export const Progress = ({ progress }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} color="white" style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    flex: 0.2,
  },
  bar: {
    height: 20,
  },
});
