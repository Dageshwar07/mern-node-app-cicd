import { MongoClient } from "mongodb";

 const connectionString="mongodb+srv://Dageshwar07:Dagesh0712@cluster1.o9ihroc.mongodb.net/ecommerce?retryWrites=true&w=majority"
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("mern-cicd");
export default db;