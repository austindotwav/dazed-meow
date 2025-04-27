import java.sql.*;

public class Main {
    public static void main(String[] args) {

        String url="jdbc:sqlite" +
                ";../database/slianna-customer-db.sqlite/";

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