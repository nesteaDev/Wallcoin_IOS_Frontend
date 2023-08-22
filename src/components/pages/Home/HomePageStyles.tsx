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
    paddingRight: 9,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerRightButtonsContainer: {
    paddingLeft: 9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomStartRadius: 40,
    borderStartStartRadius: 40,
  },
  headerText: {
    padding: '5%',
    borderRadius: 5,
    marginHorizontal: '2%',
  },
  headerTextLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '600',
  },
  headerTextName: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
  },
  iconStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 50,
    padding: 5,
  },
  iconLeftStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 5,
  },
  iconRightStyle: {
    marginLeft: 5,
  },
  headerRightButtons: {
    flexDirection: 'row',
    paddingVertical: 9,
  },
  textCardName: {
    color: 'red',
  },
  containerLoader: {
    marginTop: '3%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: '13%',
    width: '100%',
    borderRadius: 9,
  },
  containerCircle: {
    marginTop: '13%',
    height: 230,
    width: 230,
    marginBottom: '5%',
  },
  mainSection: {
    marginTop: '5%',
    height: '26%',
    width: '98.3%',
    borderRadius: 10,
  },
  containerImage: {
    width: '70%',
    height: '40%',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
