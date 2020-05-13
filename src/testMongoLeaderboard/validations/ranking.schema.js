/**
 * Ranking query params Joi Schema
 * Developer: José Luis Olivares
 * Date: 27/04/2020
*/

const Joi = require('@hapi/joi'); //Library for validations
let logs = Joi.object().keys({
  "fishingsessionid": Joi.string().required(),
  "fishinglogid": Joi.string().required(),
  "fishinglogtype": Joi.string().required(),
  "fishpicurl": Joi.string().required(),
  "logcreatedate": Joi.date().required(),
  "timezone": Joi.string().required(),
  "createdate": Joi.date().required(),
  "fishname": Joi.string().required(),
  "size": Joi.number(),
  "weight": Joi.number(),
  "watertype": Joi.string().required(),
  "actualfishvalue": Joi.number().integer(),
  "latitude": Joi.number(),
  "longitude": Joi.number(),
  "ispublic": Joi.boolean(),
  "boatname": Joi.string().required(),
  "boatcountry": Joi.string().required(),
  "boatpicurl": Joi.string().required(),
  "boatid": Joi.string().required(),
  "mates": Joi.string().required(),
  "captain": Joi.string().required(),
  "anglername": Joi.string().required(),
  "angleremail": Joi.string().required(),
})
//Params required when making a request
const rankingSchema={getRanking:Joi.object({
    roleName: Joi.string().allow(''),
    userEmail: Joi.string().allow(''),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    isRegional: Joi.boolean(),
    isLocal: Joi.boolean(),
    regionName: Joi.string().allow(''),
    localityUUID: Joi.string().allow(''),
    waterType: Joi.string(),
    fishUUID: Joi.string().allow(''),
    offset: Joi.number().integer(),
    limit: Joi.number()
        .integer()
        .positive(),
}),
postRanking:Joi.object({
  data: Joi.array().items(logs)
}),


};
module.exports=rankingSchema;

