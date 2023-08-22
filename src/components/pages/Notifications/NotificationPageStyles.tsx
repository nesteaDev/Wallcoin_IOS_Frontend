import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    padding: '3%',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  containerList: {
    width: '100%',
    paddingHorizontal: '6%',
  },
  notificationItem: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default styles;
