import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import GlobalContext from '../../context/GlobalContext';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

export const Focus = () => {
  const { tempItem, setTempItem, setFocusSubject } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              setFocusSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    alignItems: 'center',
  },
  inputText: {
    flexGrow: 1,
    marginRight: spacing.md,
  },
});
