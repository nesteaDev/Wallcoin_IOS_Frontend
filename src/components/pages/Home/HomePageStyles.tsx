import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '3%',
    paddingHorizontal: '3%',
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
  mainSection: {
    marginTop: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '14%',
    width: '100%',
    borderRadius: 20,
    overflow: 'visible',
  },
  swiperContainer: {
    overflow: 'visible',
    height: '50%',
    bottom: 0,
    zIndex: 10000,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  slideImage: {
    overflow: 'visible',
    width: '20%',
    height: '30%',
    borderRadius: 10,
  },
  imageBackground: {
    overflow: 'visible',
    flex: 1,
    resizeMode: 'cover',
    zIndex: 1,
  },
});

export default styles;
