import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener instalada esta biblioteca

type IconProps= {
  name:string,
  size:number,
  color:string
}
const IconAtom = ({name, size, color}: IconProps) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IconAtom;
