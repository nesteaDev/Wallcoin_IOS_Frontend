import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import TextAtom from '../atoms/TextAtom';
import { StyleProp } from 'react-native';


type TitleMoleculeProps = {
  styleContainer?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};



const TitleMolecule = (Props: TitleMoleculeProps) => {

  const {styleContainer, styleTitle, children} = Props;

  return (
    <>
      <View style={([styles.container, styleContainer])}>
        <TextAtom style={([styles.title, styleTitle])}>{ children }</TextAtom>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TitleMolecule;
