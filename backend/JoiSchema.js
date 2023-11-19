const Joi=require('joi');
module.exports.feedSchema=Joi.object({
    Feed:Joi.object({
         title:Joi.string().required(),
         likes:Joi.number().required().min(0),
         image:Joi.string(),
         caption:Joi.string().required(),
         descriptions:Joi.string().required(),
         uploaddate:Joi.date().required()
    }).required()
 })


 module.exports.commentSchema=Joi.object({
     comment:Joi.object({
          comlikes:Joi.number().required(),
          body:Joi.string().required()
     }).required()
 })

