// estos controladores para los productos manejan la misma estructura y lògica que la de las categorias

const Product = require('../models/product.model');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener productos', error: err });
    }
    res.json(data);
  });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener el producto', error: err });
    }
    if (!data) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(data);
  });
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear producto', error: err });
    }
    res.status(201).json({ message: 'Producto creado', data });
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  Product.update(id, updateData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar producto', error: err });
    }
    res.json({ message: 'Producto actualizado', data });
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar producto', error: err });
    }
    res.json({ message: 'Producto eliminado', data });
  });
};
