const { Router } = require('express');

const router = Router();

const {renderSignInForm, signIn, renderSignUpForm, signup, logout} = require('../controllers/user.controllers')

router.get('/auth/singing', renderSignInForm)
router.post('/auth/singing', signIn)

router.get('/auth/signup', renderSignUpForm)
router.post('/auth/signup', signup)

router.get('/auth/logout', logout)

module.exports =  router