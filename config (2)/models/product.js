const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  desconto: Number,
  status: { type: String, enum: ['pendente', 'aprovado', 'rejeitado'], default: 'pendente' },
  vendedor: String,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);