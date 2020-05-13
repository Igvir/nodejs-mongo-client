/**
 * Using Mongoose to connect to MongoDB 
 * Developer: José Luis Olivares
 * Date: 30/04/2020
*/
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

const DB_LEADERBOARD="leaderboard_db"; //DB Name
const DB_TYPE = config.db.type;
const DB_HOST = config.db.host;
const DB_PORT = config.db.port;

//database url
const uri = `mongodb+srv://club:club2020$@cluster0-94p7i.mongodb.net/${DB_LEADERBOARD}?retryWrites=true&w=majority`;
const localDB=`${DB_TYPE}://${DB_HOST}:${DB_PORT}/${DB_LEADERBOARD}`;
const connectDB = async () => {
  try{
    console.log(`Trying to connect to ${DB_TYPE}`);
    const connect = await mongoose.connect(`${localDB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`MongoDB connected: ${connect.connection.host}:${connect.connection.port}`);
    } catch(error){
      console.log(`[MongoDB connection] ERROR: ${error}`);
    }
}
connectDB();

module.exports=mongoose;
