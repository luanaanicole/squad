const Product = require('../modelo/Product');

exports.create = async (req, res) => {
  const novoProduto = new Product(req.body);
  await novoProduto.save();
  res.status(201).json(novoProduto);
};

exports.getAll = async (req, res) => {
  const produtos = await Product.find();
  res.json(produtos);
};

exports.getById = async (req, res) => {
  const produto = await Product.findById(req.params.id);
  res.json(produto);
};

exports.update = async (req, res) => {
  const atualizado = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizado);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Produto removido' });
};