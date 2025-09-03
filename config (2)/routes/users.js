const express = require("express");
const router = express.Router();

// "Banco de dados" só na memória por enquanto (array)
let users = [];

// ------------------
// Rota 1: LISTAR TODOS OS USUÁRIOS
// ------------------
router.get("/", (req, res) => {
  res.json(users);
});

// ------------------
// Rota 2: CRIAR NOVO USUÁRIO
// ------------------
router.post("/", (req, res) => {
  const { name, email } = req.body;

  // Criar um novo usuário com id único
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// ------------------
// Rota 3: ATUALIZAR UM USUÁRIO
// ------------------
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  let user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});

// ------------------
// Rota 4: DELETAR UM USUÁRIO
// ------------------
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);

  res.json({ message: "Usuário deletado com sucesso" });
});

module.exports = router;