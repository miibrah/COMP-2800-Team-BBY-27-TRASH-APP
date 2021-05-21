const { data } = require('jquery');
const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://node1234:Node4321@samcluster.udaz6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();


        await findOneListingByName(client, "amazing deal!");



        // await createMultipleListings(client, [
        //     {
        //         name: "okay place",
        //         summary: "twas an okay place",
        //         bedrooms: 3,
        //         bathrooms: 2
        //     },
        //     {
        //         name: "amazing deal!",
        //         summary: "Won't find a better price for a 2 bedroom 3 bathroom home like this",
        //         bedrooms: 2,
        //         bathrooms: 3
        //     },
        //     {
        //         name: "fake news",
        //         summary: "this is a review",
        //     }
        // ]);

        // await createListing(client, {
        //     name: "lovely loft",
        //     summary: "a Charming place",
        //     bedrooms: 1,
        //     bathrooms: 1
        // });

        // await listDatabases(client);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

    if (result) {
        console.log(`Found a listing in the collection "listings and Reviews" with the name '${nameOfListing}'`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany
    (newListings);

    console.log(`${result.insertedCount} new listings created with the followinf id(s): `);
    console.log(result.insertedIds);
}

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne
    (newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
   const databasesList = await client.db().admin().listDatabases();

   console.log("databases : ")
   databasesList.databases.forEach(db => {
       console.log(`- ${db.name}`);
   })
}