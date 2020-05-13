/**
 * Leaderboard Schema for mongoose
 * Developer: José Luis Olivares
 * Date: 29/04/2020
*/
//const mongoose = require('mongoose');
const mongoose=require('../db/connection_mongoose');
const teamMemberSchema=new mongoose.Schema({username:String, useremail:String});
const leaderboardSchema = new mongoose.Schema({
   fishingsessionid: String,
   fishinglogid:String,
   fishinglogtype:String,
   fishpicurl:String,
   logcreatedate:Date,
   timezone:String,
   createdate:Date,
   fishname:String,
   size:Number,
   weight:Number,
   watertype:String,
   actualfishvalue:Number,
   videourl:String,
   latitude:Number,
   longitude:Number,
   ispublic:Boolean,
   clubid:Number,
   clubname:String,
   clubpicurl:String,
   cluburl:String,
   tournamentid:Number,
   tournamentname:String,
   boatname:String,
   boatcountry:String,
   boatpicurl:String,
   boatid:String,
   mates:String,
   captain:String,
   anglername: String,
   angleremail: String
},
{
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  }
);

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema,'leaderboard'); //last param is collection name
module.exports = Leaderboard;