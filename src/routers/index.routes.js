const { Router } =  require('express');
const router = Router();

const { renderIndex, renderApp, renderAbout, sendMessage } = require ('../controllers/index.controllers.js')

router.get('/', renderIndex)

router.get('/about', renderAbout)

router.get('/chat', sendMessage)

module.exports =  router

