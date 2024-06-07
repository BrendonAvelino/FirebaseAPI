import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';


export default function App() {

  const [Marca, setMarca] = useState('Carregando...');
  const [Modelo, setModelo] = useState ('Carregando...');
  const [Valor, setValor] = useState ('Carregando...');

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(bancoExterno, "Estoque", "3"), (snap) => {
      setMarca(snap.data()?.Marca);
      setModelo(snap.data()?.Modelo);
      setValor(snap.data()?.Valor);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 40, backgroundColor: '#F93', padding: 10, borderRadius: 10 }}>Informação: </Text>
      <Text style={{ fontSize: 25, marginBottom: 10 ,backgroundColor: '#BC6', padding: 8, borderRadius: 10 }}>Marca: {Marca} </Text>
      <Text style={{ fontSize: 25, marginBottom: 10 ,backgroundColor: '#BC6', padding: 8, borderRadius: 10 }}>Modelo: {Modelo} </Text>
      <Text style={{ fontSize: 25, marginBottom: 10 ,backgroundColor: '#BC6', padding: 8, borderRadius: 10 }}>Valor: {Valor} </Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
