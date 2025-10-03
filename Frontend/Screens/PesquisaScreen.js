import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function PesquisaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Pesquisa</Text>
      <TextInput style={styles.input} placeholder="Digite sua busca..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
