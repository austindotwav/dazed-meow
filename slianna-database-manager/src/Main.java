// This Java code would run on the backend server to communicate with the database

import java.sql.*;

public class Main {
    public static void main(String[] args) {

        String url="jdbc:mysql" +
                "user/WebstormProjects/anna/back_end/database/slianna_customer_db.mysql/";

        try (Connection conn = DriverManager.getConnection(url)) {
            if (conn != null) {
                System.out.println("Connected!");

                Statement stmt = conn.createStatement();
                String sql = "CREATE TABLE IF NOT EXISTS customers (" +
                        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                        "first_name TEXT NOT NULL," +
                        "last_name TEXT NOT NULL," +
                        "email TEXT NOT NULL UNIQUE," +
                        "password TEXT NOT NULL," +
                        "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP" +
                        ")";
                stmt.execute(sql);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}