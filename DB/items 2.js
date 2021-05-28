const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://dbUser:dbUser@cluster0.olikl.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const run = async function run() {
  try {
    await client.connect();
    const database = client.db("Item-collection");
    const items = database.collection("items");
    // create a document to be inserted
    const doc = { itemID: "cheetos123", name: "cheetos" };
    const result = await items.insertOne(doc);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
module.exports = run;

