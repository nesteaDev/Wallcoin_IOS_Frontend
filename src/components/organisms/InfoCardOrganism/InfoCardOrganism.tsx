import React from 'react';
import {TextStyle, Image, View} from 'react-native';
import {PersonInterface} from '../../../models/PersonInterface';
import ContainerAtom from '../../atoms/ContainerAtom';
import TextAtom from '../../atoms/TextAtom';
import styles from './InfoCardOrganismStyles';

type InfoCardOrganismProps = {
  styleSectionTop?: TextStyle | TextStyle[] | undefined;
  styleSectionBottom?: TextStyle;
  styleLabel?: TextStyle | TextStyle[] | undefined;
  styleTextName?: TextStyle;
  styleTextBalance?: TextStyle;
  styleTextAccount?: TextStyle;
  iconUrl?: string;
  data?: PersonInterface;
  profile?: boolean;
};

const InfoCardOrganism = (props: InfoCardOrganismProps) => {
  const {
    styleSectionTop,
    styleSectionBottom,
    styleLabel,
    styleTextName,
    styleTextBalance,
    styleTextAccount,
    data,
    profile,
  }: InfoCardOrganismProps = props;

  console.log('Desde el componente Info: ',data);

  const url = data?.urlImage
    ? {uri: data.urlImage}
    : require('../../../assets/profile.jpeg');

  return (
    <ContainerAtom style={[styles.container, styleSectionTop]}>
      {profile ? (
        <Image style={styles.imageProfile} source={url} />
      ) : (
        <Image
          style={styles.logo}
          source={require('../../../assets/Saly-28.png')}
        />
      )}
      <View style={styles.containerTextAccount}>
        <TextAtom style={[styles.textAccount, styleTextAccount]}>
          No. {data?.account.accountNumber}-0
        </TextAtom>
      </View>
      <View style={[styles.containerData, styleSectionBottom]}>
        <View style={styles.containerDataCont}>
          <View>
            <TextAtom style={[styles.textLabel, styleLabel]}>Nombre</TextAtom>
            <TextAtom style={[styles.textName, styleTextName]}>
              {data?.name}
            </TextAtom>
            {profile ? (
              <>
                <TextAtom
                  style={[
                    styles.textLabel,
                    styleLabel,
                    styles.textLabelProfile,
                  ]}>
                  Email
                </TextAtom>
                <TextAtom style={[styles.textBalance, styleTextBalance]}>
                  {data?.username}
                </TextAtom>
              </>
            ) : (
              <></>
            )}
          </View>
          {profile ? (
            <></>
          ) : (
            <View style={styles.containerBalance}>
              <TextAtom style={[styles.textLabel, styleLabel]}>
                Balance
              </TextAtom>
              <TextAtom style={[styles.textBalance, styleTextBalance]}>
                $ {data?.account.balance}
              </TextAtom>
            </View>
          )}
        </View>
      </View>
    </ContainerAtom>
  );
};

export default InfoCardOrganism;
