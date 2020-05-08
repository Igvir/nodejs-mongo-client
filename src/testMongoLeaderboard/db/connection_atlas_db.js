// mongodb driver test
const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://club:club2020$@cluster0-94p7i.mongodb.net/test?retryWrites=true&w=majority";
const dbName="leaderboard_db";
const dbCollectionName="leaderboard";

function initialize(
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};