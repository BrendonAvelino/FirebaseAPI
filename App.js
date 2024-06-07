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
    const unsubscribe = onSnapshot(doc(bancoExterno, "Estoque", "1"), (snap) => {
      setMarca(snap.data()?.Marca);
      setModelo(snap.data()?.Modelo);
      setValor(snap.data()?.Valor);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Informação: </Text>
      <Text style={{ fontSize: 25 }}>Marca: {Marca} </Text>
      <Text style={{ fontSize: 25 }}>Modelo: {Modelo} </Text>
      <Text style={{ fontSize: 25 }}>Valor: {Valor} </Text>

      <TouchableOpacity style={{ backgroundColor: "#F94", marginTop: 20, borderRadius: 5, padding: 10 }}>
        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>Adicionar</Text>
      </TouchableOpacity>
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
