var Config = module.exports = {
  //---------------------
  //Main Configurations
  //---------------------
  port: 8000,

  jwtSecret: 'aeha8j4h20adn92k10nkav0sjf90sleicazvyi54j39jfqasfjk9',

  //---------------------
  //Login Configurations
  //---------------------

  //Needs to be the same as Client firstHash
  firstHash: 'd28cb767c4272d8ab91000283c67747cb2ef7cd1',

  //Mail to send activation codes from
  mailFrom: 'smtps://username@gmail.com:password@smtp.gmail.com',

  //Activation API Location
  actUrl: 'http://localhost:8000/activate/',

  //------------------------
  //Database Configurations
  //------------------------

  mongoDBconnect: 'mongodb://username:password@linktomongodb.com:39504/collection'
};
