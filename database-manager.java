import java.sql.*;

public class Main {
    public static void main(String[] args) {

        String url="jdbc:sqlite" +
                ";../database/slianna-customer-db.sqlite/"

                try (Connection conn = DriverManager.getConnection(url)) {
                if (conn != null) {
                System.out.println("Connected!");
                }

                }
    }
}