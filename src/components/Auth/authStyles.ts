import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    height: '34%',
  },
  title: {
    marginTop: '6%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#125366',
    marginBottom: 12,
    textAlign: 'center',
  },
  titleStrong: {
    color: '#D57329',
  },
  description: {
    fontSize: 16,
    color: '#14213d',
    textAlign: 'center',
    paddingHorizontal: 35,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D57329',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 45,
    marginTop: '8%',
    marginHorizontal: '3%',
    height: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  swiperContainer: {
    position: 'absolute',
    bottom: '17%',
    height: '50%',
    zIndex: 1,
  },
  slideImage: {
    marginLeft: '17%',
    width: '70%',
    height: '55%',
    borderRadius: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    zIndex: 1,
  },
  descriptionFooter: {
    fontSize: 16,
    color: '#14213d',
    textAlign: 'center',
    marginTop: 20,
  },
  descriptionFooterStrong: {
    fontSize: 16,
    color: '#125366',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  containerImg: {
    position: 'absolute',
    right: '2%',
    top: '-13%',
    width: '30%',
    height: '34%',
    borderRadius: 10,
  },
  imageLogin: {
    flex: 1,
    resizeMode: 'cover',
    zIndex: 1000,
  },
});

export default styles;
