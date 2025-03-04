import mysql from "mysql2/promise"

// Uppkoppling mot databasen
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instagram2025",
    port: 8889 // Mac 8889, Windows 3306
  });


// Helper function
async function query<T>(sql:string, params: any[]) {
    const [ result] = await pool.execute(sql, params)
   return result as T;
}


export { query };
