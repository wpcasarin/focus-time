import { useContext } from 'react';
import { View } from 'react-native';

import GlobalContext from '../../context/GlobalContext';
import { RoundedButton } from '../../components/RoundedButton';

export const Timming = () => {
  const { setProgress, setIsStarted, setMillis, minutesToMillis } =
    useContext(GlobalContext);

  const update = (min) => {
    setMillis(minutesToMillis(min));
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <>
      <View>
        <RoundedButton size={100} title="5" onPress={() => update(5)} />
      </View>
      <View>
        <RoundedButton size={100} title="25" onPress={() => update(25)} />
      </View>
      <View>
        <RoundedButton size={100} title="45" onPress={() => update(45)} />
      </View>
    </>
  );
};
