import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
