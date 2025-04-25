const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('slianna-customer-db.sqlite');

db.each("SELECT * FROM users", (err, row) => {
    console.log(row);
})