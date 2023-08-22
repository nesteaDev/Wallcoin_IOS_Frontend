import React, { ReactNode, useState } from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import TextAtom from '../atoms/TextAtom';
import CircleAtom from '../atoms/CircleAtom';
import IconMolecule from './IconMolecule';




type InfoCardOrganismProps = {
  styleContainer?: StyleProp<TextStyle>;
  styleButton?: StyleProp<TextStyle>;
  styleTitle?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
  value? : string;
  children?: ReactNode;
};

const CircleMolecule = (props: InfoCardOrganismProps) => {

  const [ icon, setIcon ] = useState('eye');
  const [isIncognito, setIsIncognito] = useState(false);

  const changeIcon = () => {
      const newIcon = icon === 'eye-off' ? 'eye' : 'eye-off';
      setIcon(newIcon);
      setIsIncognito(!isIncognito);
  };

  const {
    styleContainer,
    styleButton,
    styleTitle,
    styleText,
    value = '0',
    children,
  }: InfoCardOrganismProps = props;

  return (
    <CircleAtom styleContainer={[styles.sectionCircle, styleContainer]}>
      <View style={[styles.containerButton, styleButton]}>
        <TextAtom style={[styles.title, styleTitle]}>Disponible</TextAtom>
        <IconMolecule
          iconName={icon}
          iconSize={22}
          iconColor="#fff"
          button={true}
          onPress={changeIcon}
        />
      </View>
      <TextAtom style={[styles.text, styleText]}>
        {isIncognito ? '$ * * * * *  ' : '$ ' + value + ',00  '}
      </TextAtom>
      {children}
    </CircleAtom>
  );
};

const styles = StyleSheet.create({
  sectionCircle: {
    height: 220,
    width: 220,
    padding: 20,
  },
  containerButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    marginTop: 6,
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(171, 190, 209,1)',
    maxHeight: 50,
    maxWidth: 200,
  },
});

export default CircleMolecule;


