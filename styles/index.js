import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: '80%',
    margin: '25%',
  },

  welcomeText: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center'
  },

  modalBtn: {
    backgroundColor: '#6666FF',
    borderRadius: 5,
    marginTop: 10
  },

  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    paddingVertical: 10,
  },

  wasPressed: {
    backgroundColor: '#6666FF',
    borderRadius: 5,
    marginTop: 10,
    opacity: 0.9
  },

  appContainer: {
    padding: 25,
    
  },

  headerContainer: {
    padding: 10,
    marginTop: '20%',
  },

  headerText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  },

  closeContainer: {
    marginTop: '10%',
    marginLeft: '80%'
  },

  closeIcon: {
    fontSize: 28
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },

  inputText: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
    width: '75%',
    marginRight: 5,
    textAlign: 'center',
    fontSize: 16,
  },

  listContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
    height: '80%'
  },

  addBtn: {
    backgroundColor: '#6666FF',
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 3,
    justifyContent: 'center'
  },

  btnText: {
    color: 'white',
    fontSize: 12
  },
});