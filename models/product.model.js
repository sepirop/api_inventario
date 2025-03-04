
const db = require('../config/database');

// representa la tabla de products en la bd

class Product {
  constructor(id, name, description, quantity, price, category_id) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.category_id = category_id;
  }

// obtener productos

  static getAll(callback) {
    db.query('SELECT * FROM products', (err, results) => {
      callback(err, results);
    });
  }

// obtener por id

  static getById(id, callback) {
    db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
      callback(err, results[0]);
    });
  }

// crear nuevo producto

  static create(data, callback) {
    db.query('INSERT INTO products SET ?', data, (err, results) => {
      callback(err, results);
    });
  }

// actualizar producto

  static update(id, data, callback) {
    db.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, results) => {
      callback(err, results);
    });
  }

// eliminar producto

  static delete(id, callback) {
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
      callback(err, results);
    });
  }
}

module.exports = Product;
