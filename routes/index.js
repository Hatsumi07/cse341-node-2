const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1'); 

routes.get('/', lesson1Controller.crystalRoute);
routes.get('/hatsumi', lesson1Controller.hatRoute);

module.exports = routes;