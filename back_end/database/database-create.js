const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('slianna-customer-db.sqlite');

db.serialize(() => {
    db.run("INSERT INTO users VALUES (1, 'Test')");
    db.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");
});