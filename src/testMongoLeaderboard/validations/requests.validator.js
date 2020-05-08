/**
 * Function to validate Joi Schema
 * Developer: José Luis Olivares
 * Date: 27/04/2020
*/

const requestsValidator = (schema, property) => { 
    return (req, res, next) => { 
      const { error } = schema.validate(req[property]); 
      const valid = error == null; 
      if (valid) { next(); } 
      else { 
        //const { details } = error; 
        //const message = details.map(i => i.message).join(',');
        const message=error.details[0].message;
        console.log("error", message); 
        res.status(422).json({ error:message });
      } 
    } 
  }
module.exports = requestsValidator;
