import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 45,
    marginTop: 20,
  },
  actionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    color: '#000',
  },
  textInputIcon: {
    marginRight: 15,
  },
  buttonContainer: {
    backgroundColor: '#fae800',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  loginWithBox: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  loginWithImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  loginWithText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 140,
  },
  footerText: {
    color: '#c4c4c4',
  },
});
