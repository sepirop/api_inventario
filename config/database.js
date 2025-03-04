
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  // para xampp
  user: 'root',      
  password: '',      
  database: 'inventory_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error', err);
    return;
  }
  console.log('Conexión correcta');
});

module.exports = connection;
