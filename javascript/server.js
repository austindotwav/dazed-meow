// original database local server implementation. not currently utilized due to server concerns.

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json());

const db = new sqlite3.Database('/slianna-customer-db.sqlite');

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)');

app.post('/submit', (req, res) => {
    const { email, password } = req.body;

    db.run('INSERT INTO users (email, password) VALUES (?, ?)',
        [username, email], function(err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'User added', id: this.lastID });
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
