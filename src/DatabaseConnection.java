import java.util.*;
import java.sql.*;

public class DatabaseConnection {
    //fields
    private Connection conn;
    private Statement statement;
    private ResultSet resultSet;
    private ResultSetMetaData metaData;
    private int numberOfRows;

    private boolean isConnected;

    DatabaseConnection(String url, String user, String pass, String query)
            throws SQLException {
        //connects to database
        conn = DriverManager.getConnection(url,user,pass);
        //update connection to Database
        isConnected = true;

    }// end constructor


    //SQL methods
// get methods
    //getcolumnCount
    public int colCount()throws IllegalStateException{
        if(!isConnected){
            throw new IllegalStateException("Database is not Connected");
        }
        try{
            //obtiains column amount
            return metaData.getColumnCount();
        }
        catch (SQLException sqlException){
            sqlException.printStackTrace();
        }

        return 0;
    }
    //getColName
    public String colName(int column)throws IllegalStateException{
        if(!isConnected){
            throw new IllegalStateException("Database is not Connected");
        }

        try{
            //obtain name of column at colIndex
            return metaData.getColumnName(column+1);
        }
        catch (SQLException sqlException){
            sqlException.printStackTrace();
        }
        return null;//if not found, returns null
    }

    //getRowCount
    public int rowCount() throws IllegalStateException{
        if(!isConnected){
            throw new IllegalStateException("Database is not Connected");
        }

        return numberOfRows;
    }

    //getVal(row,col)
//set methods
    //set query
    public void setQuery(String query)
            throws SQLException, IllegalStateException {

        // ensure database connection is available
        if (!isConnected) {
            throw new IllegalStateException("Not Connected to Database");
        }

        // specify query and execute it
        resultSet = statement.executeQuery(query);

        // obtain metadata for ResultSet
        metaData = resultSet.getMetaData();

        // determine number of rows in ResultSet
        resultSet.last(); // move to last row
        numberOfRows = resultSet.getRow(); // get row number


        //fireTableStructureChanged(); // notify JTable that model has changed
    }
    //disconnect method
    public void disconnectDatabase() {
        if (isConnected) {
            // close Statement and Connection
            try {
                resultSet.close();
                statement.close();
                conn.close();
            }
            catch (SQLException sqlException) {
                sqlException.printStackTrace();
            }
            finally { // update database connection status
                isConnected = false;
            }
        }
    }

}//end database connection
