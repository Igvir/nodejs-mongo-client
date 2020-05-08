/**
 * Ranking API
 * Developer: José Luis Olivares
 * Date: 27/04/2020
*/

const express = require('express');
const router = express.Router();
const GhostContentAPI = require('@tryghost/content-api');
const GhostAdminAPI = require('@tryghost/admin-api');
const rankingSchema=require('../validations/ranking.schema');
const requestValidator= require('../validations/requests.validator');
const rankingController=require('../controllers/ranking.controller'); 
 
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '8e893624c0f9e4cef00dc25f46',
    version: "v3"
  });
  
  const apiAdmin = new GhostAdminAPI({
    url: 'http://localhost:2368',
    key: '5e98cc6b8fd9f4377006d40e:8add595d1e9ffbf4a935648a9367f121b17d76e3f543eb79371cad11104acbcc',
    version: "v3"
  });
   
  const ROL = {
    BOAT: 'boat',
    CAPTAIN: 'captain',
    ANGLER: 'angler',
    MATE: 'mate',
  };
  const REQTYPE={
    BODY:'body',
    QUERY:'query'
  };

//Gets a list of rankings record from DB
router.get('/', requestValidator(rankingSchema.getRanking,REQTYPE.QUERY),rankingController.get);

//Post a ranking on Database
router.post('/',requestValidator(rankingSchema.postRanking, REQTYPE.BODY),rankingController.post);



module.exports = router;