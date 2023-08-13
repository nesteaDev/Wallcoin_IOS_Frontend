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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubtitle:{
    fontSize: 13,
  },
  transactionAmount: {
    fontSize: 18,
    color: '#3498db',
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default styles;
