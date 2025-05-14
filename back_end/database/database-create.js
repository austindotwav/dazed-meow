const msql = require('mysql').verbose();
const db = new mysql.Database('slianna_customer_db.mysql');

db.serialize(() => {
    db.run("INSERT INTO customer VALUES (1, 'Test')");
    db.run("CREATE TABLE IF NOT EXISTS customer (" +
        "customer_id INT NOT NULL, " +
        "last_name TEXT(25) NOT NULL, " +
        "first_name TEXT(25) NOT NULL, " +
        "birthday date NOT NULL, " +
        "street varchar(75) NOT NULL, " +
        "city varchar(50) NOT NULL, " +
        "state varchar(25) NOT NULL, " +
        "zip varchar(5) NOT NULL, " +
        "email varchar(100) NOT NULL, " +
        "password_hash varchar(100) NOT NULL");
});