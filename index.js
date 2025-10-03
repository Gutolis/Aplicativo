const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir requisições de outros domínios (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Rota principal
app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando no CodeSandbox!" });
});

// Rota para o cadastro (vamos usar depois)
app.post("/cadastro", express.json(), (req, res) => {
  const { username, email } = req.body;
  console.log("Recebido novo cadastro:", { username, email });

  if (!username || !email) {
    return res.status(400).json({ error: "Usuário e email são obrigatórios." });
  }

  // Simulação de salvamento no banco de dados
  res
    .status(201)
    .json({ message: `Usuário ${username} cadastrado com sucesso!` });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
