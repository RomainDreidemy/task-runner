import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Modal, Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const IsConnected = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsVisible(!state.isConnected);
    });
    unsubscribe();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      // onRequestClose={() => setIsConnected(true)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Vous êtes hors ligne</Text>
          <Text style={styles.modalText}>
            Il est possible que certaines informations ne puissent pas être
            chargé.
          </Text>

          <View style={styles.groupButton}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.textStyle}>Continuer</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '40%'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    width: '80%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '48%',
    marginVertical: 3,
    marginHorizontal: 5
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between'
  },
  input: {
    padding: 5,
    height: 40,
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
};

export default IsConnected;
