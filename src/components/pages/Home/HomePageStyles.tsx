import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
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
});

export default styles;
