/**
 * Using Mongoose to connect to MongoDB 
 * Developer: José Luis Olivares
 * Date: 30/04/2020
*/
const  mongoose = require('mongoose');
const DB_LEADERBOARD="leaderboard_db"; //DB Name
//database url
const uri = `mongodb+srv://club:club2020$@cluster0-94p7i.mongodb.net/${DB_LEADERBOARD}?retryWrites=true&w=majority`;

    mongoose.connect(`${uri}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', (err)=>{
      console.log(`[MongoDB connection] ERROR: ${err}`);
    }); 

    db.once('open', () => {
      console.log('MongoDB connected'); // si esta todo ok, imprime esto
    });

module.exports=mongoose;