// Arquivo: App.js

import React from "react";
// 1. Importa diretamente a nossa única tela
import HomeScreen from "./screens/HomeScreen";

// 2. A função principal do App simplesmente "retorna" a HomeScreen. Nada mais.
export default function App() {
  return <HomeScreen />;
}
