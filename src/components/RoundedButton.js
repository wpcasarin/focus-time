import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 128,
  type = '',
  ...props
}) => {
  if (type === 'play') {
    return (
      <TouchableOpacity
        style={[styles(size).radius, style]}
        onPress={props.onPress}>
        <FontAwesomeIcon
          icon={faPlay}
          size={size / 2}
          color={`${colors.white}`}
        />
      </TouchableOpacity>
    );
  }
  if (type === 'pause') {
    return (
      <TouchableOpacity
        style={[styles(size).radius, style]}
        onPress={props.onPress}>
        <FontAwesomeIcon
          icon={faPause}
          size={size / 2}
          color={`${colors.white}`}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });
