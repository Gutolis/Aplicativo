import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Agora essas importações vão funcionar, pois os arquivos estão nos lugares certos!
import HomeScreen from "./screens/HomeScreen";
import CadastroScreen from "./screens/CadastroScreen";
import PesquisaScreen from "./screens/PesquisaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Bem-vindo" }}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
