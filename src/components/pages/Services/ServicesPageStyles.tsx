import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: '3%',
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
  cardInfo:{
    flex: 2 / 6,
  },
  containerLoader: {
    marginTop: '10%',

    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '13%',
    width: '100%',
    borderRadius: 9,
  },
});

export default styles;
