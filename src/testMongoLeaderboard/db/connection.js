/**
 * Testing MongoDB Connection using just driver
 * Developer: José Luis Olivares
 * Date: 29/04/2020
*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://club:club2020$@cluster0-94p7i.mongodb.net/test?retryWrites=true&w=majority";
const DB_LEADERBOARD="leaderboard_db";
const COLL_LEADERBOARD="leaderboard";
const client = new MongoClient(uri, { useNewUrlParser: true});   //{ useNewUrlParser: true}

const mongoConnection= {
    insertOne:async function(values){
        try {
            await client.connect(err => {
                const collection = client.db(DB_LEADERBOARD).collection(COLL_LEADERBOARD);
                console.log("________________________________");
                console.log(values);
                // perform actions on the collection object
                collection.insertOne(JSON.parse(values));  //JSON Parse required when sending data from form

              });       
        } catch (error) {
            console.error(error);
        }finally{
            client.close();
        }

    }
}



module.exports = mongoConnection;

