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


const LeaderboardSchema = require('../mongo_schemas/leaderboard.schema');
const RankingHelper = require('../helpers/ranking.helper');
const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
    apiVersion: '2015-03-31',
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ranking = {
    get: async(req,res)=>{
        try{
            const response = await(RankingHelper
                .getDataForRanking(req.query.startDate, req.query.endDate));
            const payload = {"logs": response};
            const params = {
                'FunctionName': 'scoreLeaderboard',
                'Payload': JSON.stringify(payload)
            }
            
            const lambdaResponse = await lambda.invoke(params).promise();

            res.json({result: JSON.parse(lambdaResponse.Payload)});
        } catch (err){
            res.json({result: err});
        } 
    }, 
    post: async(req,res)=>{
        console.log('POST Leaderboard');  
        try {
            const dataToSave=req.body.data;
            await LeaderboardSchema.insertMany(dataToSave, function(error) {
                if(error){
                    console.log(error);
                } else{
                    console.log("Insert Correctly");
                }
            })
        } catch (error) {
            console.error(error);
        }finally{
            let jsonResponse=req.body.data;
            res.json(jsonResponse); 
        }
    },
    delete: async(req, res) => {
        console.log("DELETE ALL -- DEV PURPOSES");
        try{
            await LeaderboardSchema.deleteMany({}, function(error, resDB){
                if(error){
                    console.log(error);
                } else {
                    res.json({Result: resDB}); 
                    console.log("Delete all the leaderboard collections");
                }
            })
        } catch(error){
            res.json({Error: error}); 
        }
    }
};

 module.exports = ranking;