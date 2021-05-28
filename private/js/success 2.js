const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://dbUser:dbUser@cluster0.olikl.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const success = async function run() {
  try {
    await client.connect();
    const database = client.db("Item-collection");
    const items = database.collection("items");
    // Query for a movie that has the title 'The Room'
    const query = { name: "cheetos" };
    const options = {
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, name: 1},
    };
    const item1 = await items.findOne(query, options);
    const cheetos = JSON.stringify(item1.name);
    $("#success-item-name").text("cheetos");
    console.log(query);
    console.log(cheetos);

    
   
    // document.getElementById("success-item-name").innerHTML = cheetos;
    // since this method returns the matched document, not a cursor, print it directly
  } finally {
    await client.close();
  }
}
success().catch(console.dir);

// const findCustomers = async function findCustomers(client) {

//     const cursor = client.db("Item-collection").collection("items").find({});

//     const results = await cursor.toArray();

//     // Process the results
//     if (results.length > 0) {
//         results.forEach((result, i) => {

//             console.log(result);
//         });
//     } else {
//         console.log(`No customers found`);
//     }
// }

module.exports = success;

// $('#success-item-name').text("cheetos");

