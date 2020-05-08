/**
 * Params from api/ranking request
 * Developer: José Luis Olivares
 * Date: 27/04/2020
 * @param {Object}   req  Request object sent on API call
 * @param {Object}   res  Response object generated from API
 */
  //const mongoDbConex =require('../db/connection'); 
  //const postDataExample=require('../db/testdata'); //Post data example

  //const mongodb=require('../db/concention_atlas_db');


  const mongoose=require('../db/connection_mongoose');
  const LeaderboardSchema=require('../mongo_schemas/leaderboard.schema');

//Ranking function
 const ranking={
    get:(req,res)=>{
        try{
            return LeaderboardSchema.find({createdate: { $gte: req.query.startDate, $lte: req.query.endDate }}, 
                function (err, resDB) {
                    if(err){
                        res.json({Error: err});
                    } else {
                        res.json({result: resDB});
                    }
              });
        } catch (error){
            res.json({Error: err});
        }
        
 }, post:async(req,res)=>{
        console.log('POST Leaderboard');  
        try {
            const dataToSave=req.body.data;
            /*const secondDataToSave = dataToSave;
            let data = [];
            data.push(dataToSave);
            data.push(secondDataToSave);*/
            //const db=mongoose.connection;    
            
            //const leaderboard= new LeaderboardSchema(dataToSave);
            
            //console.log(`Collection name: ${leaderboard.collection.collectionName}`);

            // await leaderboard.save((err,leaderboard)=>{
            //     if(err) throw err;
            //     console.log(`fishingsessionid ${leaderboard.fishingsessionid} was saved to database`);
            // });
            await LeaderboardSchema.insertMany(dataToSave, function(error, docs) {
                if(error){
                    console.log(error);
                } else{
                    console.log("Insert perfect");
                }
            })
            
            

          //aqui hariamos el insert a la base de datos
           //mongoDbConex.insertOne(req.body.data);
        } catch (error) {
            console.error(error);
        }finally{
            console.log("Finally executed");
            let jsonResponse=req.body.data;
            res.json(jsonResponse); 
        }


 }
};

 module.exports = ranking;