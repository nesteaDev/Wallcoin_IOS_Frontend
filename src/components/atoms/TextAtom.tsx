import React, { ReactNode } from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

type TextAtomProps = {
  children?: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
};

const TextAtom = ({children, style}: TextAtomProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default TextAtom;
