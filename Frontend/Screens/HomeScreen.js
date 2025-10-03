import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <View style={{ marginVertical: 10 }} /> 
      <Button
        title="Ir para Pesquisa"
        onPress={() => navigation.navigate('Pesquisa')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
