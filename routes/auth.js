const express = require('express');
const router = express.Router();

// Exemplo de rota de teste
router.get('/', (req, res) => {
  res.send('Rota de autenticação funcionando!');
});

module.exports = router;