const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'issue-tracker',
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err.stack);
    return;
  }
  console.log('Connection successful!');
  connection.end();
});