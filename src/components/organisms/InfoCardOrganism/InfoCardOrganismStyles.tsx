import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1 / 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '82%',
    paddingTop: '15%',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.86,
    shadowRadius: 11.14,
    elevation: 17,
  },
  imageProfile: {
    position: 'absolute',
    borderRadius: 50,
    top: '-40%',
    left: '35%',
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.86,
    shadowRadius: 11.14,
  },
  logo: {
    position: 'absolute',
    right: '5%',
    top: '8%',
    width: 50,
    height: 40,
  },
  containerTextAccount: {
    width: '100%',
    paddingHorizontal: 20,
  },
  textAccount: {
    fontSize: 19,
    letterSpacing: 3.5,
    color: 'rgba(255, 255, 255,1)',
    fontWeight: '500',
  },
  containerData: {
    marginTop: '4%',
    width: '100%',
    paddingBottom: 14,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  containerDataCont: {
    borderRadius: 6,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    width: '100%',
  },
  textLabel: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '500',
    color: 'rgba(255, 255, 255,0.9)',
  },
  textLabelProfile: {
    marginTop: 4,
  },
  textName: {
    fontSize: 17,
    overflow: 'scroll',
    width: 150,
    fontWeight: '500',
    color: 'rgba(255, 255, 255,1)',
  },
  containerBalance: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textBalance: {
    fontSize: 17,
    letterSpacing: 2,
    fontWeight: '500',
    color: 'rgba(188, 130, 66,1)',
  },
});

export default styles;
