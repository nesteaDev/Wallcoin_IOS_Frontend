import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TextStyle, TouchableOpacity, StyleProp } from 'react-native';

type IconMoleculeProps = {
  containerIconStyles?: StyleProp<TextStyle>;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  button: boolean;
  onPress?: () => void;
  activeOpacity?: number;
};


const WalletIconMolecule = ( props: IconMoleculeProps) => {

  const {containerIconStyles,iconName = 'help',iconSize,iconColor, onPress, activeOpacity, button}: IconMoleculeProps = props;

  if (button) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerIconStyles}
        activeOpacity={activeOpacity}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    );
  }
  return (
    <Text style={[containerIconStyles]}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </Text>
  );
};

export default WalletIconMolecule;
