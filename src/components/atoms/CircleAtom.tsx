import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import ContainerAtom from '../atoms/ContainerAtom';

type InfoCardOrganismProps = {
  styleContainer?: StyleProp<TextStyle>;
  children?: ReactNode;
};

const CircleAtom = (props: InfoCardOrganismProps) => {
  const {styleContainer, children}: InfoCardOrganismProps = props;

  return (
    <ContainerAtom style={[styles.sectionCircle, styleContainer]}>
      {children}
    </ContainerAtom>
  );
};

const styles = StyleSheet.create({
  sectionCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 240,
    width: 240,
    borderRadius: 200,
    shadowColor: 'rgba(255, 255, 255, 0.6)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 46.0,
    elevation: 24,
  },
});

export default CircleAtom;
