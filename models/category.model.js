
const db = require('../config/database');


// definimos la clase categoria con id, nombre y descripcion
class Category {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  // ejecuta la consulta sql para devolver las categorias en un array
  static getAll(callback) {
    db.query('SELECT * FROM categories', (err, results) => {
      callback(err, results);
    });
  }

  // ejecuta la consulta sql para devolver una categoria por id

  static getById(id, callback) {
    db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
      callback(err, results[0]);
    });
  }

// inserta una nueva categoría en la bd, data tiene que ser un objeto con nombre y descripción

  static create(data, callback) {
    db.query('INSERT INTO categories SET ?', data, (err, results) => {
      callback(err, results);
    });
  }

// actualiza una categoría que ya existe con los datos de data

  static update(id, data, callback) {
    db.query('UPDATE categories SET ? WHERE id = ?', [data, id], (err, results) => {
      callback(err, results);
    });
  }

// borra la categoria con un ID

  static delete(id, callback) {
    db.query('DELETE FROM categories WHERE id = ?', [id], (err, results) => {
      callback(err, results);
    });
  }
}

module.exports = Category;
