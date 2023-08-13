import React from 'react';
import { StyleSheet, View, TextStyle, StyleProp } from 'react-native';


type ContainerAtomProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const ContainerAtom = (props: ContainerAtomProps) => {

  const { style, children }: ContainerAtomProps = props;

  return (
    <>
      <View style={[defaultStyles.container, style]}>{children}</View>
    </>
  );
};

export default ContainerAtom;


//Styles default

const defaultStyles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


