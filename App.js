import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';


export default function App() {

  const [nome, setNome] = useState('Carregando...');

  useEffect(() => {
    onSnapshot(doc(bancoExterno, "/", "/"), (snap) => {
      setNome(snap.data()?.Geladeira)
    });


  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Informação: {nome}</Text>
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
