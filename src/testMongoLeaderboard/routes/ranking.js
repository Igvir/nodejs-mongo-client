/**
 * Ranking API
 * Developer: José Luis Olivares
 * Date: 27/04/2020
*/

const express = require('express');
const router = express.Router();
const rankingSchema=require('../validations/ranking.schema');
const requestValidator= require('../validations/requests.validator');
const rankingController=require('../controllers/ranking.controller'); 
   
const ROL = {
  BOAT: 'boat',
  CAPTAIN: 'captain',
  ANGLER: 'angler',
  MATE: 'mate',
};
const REQTYPE = {
  BODY:'body',
  QUERY:'query'
};

//Gets a list of rankings record from DB
router.get('/boats/', requestValidator(rankingSchema.getRanking,REQTYPE.QUERY),rankingController.get);

//Post a ranking on Database
router.post('/',requestValidator(rankingSchema.postRanking, REQTYPE.BODY),rankingController.post);

//Delete all the collections - DEV PURPOSES
router.delete('/deleteAll',rankingController.delete);

module.exports = router;