

// req.params.id: variable que permite obtener el valor de un parámetro de ruta en Express


// este controlador maneja el crud para las categorias de los productos


const Category = require('../models/category.model');


// llama al metodo get all para tener todas las categorias

exports.getAllCategories = (req, res) => {
  Category.getAll((err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error', error: err });
    }
    res.json(data);
  });
};

// extrae el id, con category.getById la busca en la bd

exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.getById(id, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener categoría', error: err });
    }
    if (!data) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(data);
  });
};

// recibe los datos del body para crear una nueva categoria

exports.createCategory = (req, res) => {
  const newCategory = req.body;
  Category.create(newCategory, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error', error: err });
    }
    res.status(201).json({ message: 'Categoría creada', data });
  });
};

// obtiene el id y recibe los datos del body para actualizar mediante updateData

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  Category.update(id, updateData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar categoría', error: err });
    }
    res.json({ message: 'Categoría actualizada', data });
  });
};

// obtiene el id y elimina la categoria

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.delete(id, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar categoría', error: err });
    }
    res.json({ message: 'Categoría eliminada', data });
  });
};
