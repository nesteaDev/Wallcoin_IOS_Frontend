import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '3%',
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
  headerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 50,
    padding: 5,
  },
  iconRightStyle: {
    marginLeft: 5,
  },
  headerRightButtons: {
    flexDirection: 'row',
  },
  textCardName: {
    color: 'red',
  },
  containerLoader: {
    marginTop: '3%',
    // backgroundColor: 'rgba(0, 0, 0, 0.45)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '13%',
    width: '100%',
    borderRadius: 9,
  },
  containerCircle: {
    marginTop: '13%',
    height: 230,
    width: 230,
    // backgroundColor: 'rgba(188, 130, 56, 1)',
    marginBottom: '10%',
  },
  mainSection: {
    marginTop: '5%',
    height: '26%',
    width: '98.3%',
    borderRadius: 10,
  },
  containerImage: {
    width: '60%',
    height: '40%',
    transform: [{translateX: -75}, {translateY: -49}],
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
