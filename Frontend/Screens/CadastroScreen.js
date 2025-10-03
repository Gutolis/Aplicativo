import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function CadastroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome de usuário" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button
        title="Cadastrar"
        onPress={() => alert("Usuário cadastrado! (teste)")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
