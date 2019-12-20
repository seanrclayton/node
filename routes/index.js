/**
 * This module connects rendering modules to routes
 */

const express = require('express')
const router = express.Router()

const { catchErrors } = require('../handlers/errorHandlers')

const { getLandingPage } = require('./landingPage')

// Display settings in case of invalid credentials

// GET the home landing page
router.get('/', catchErrors(getLandingPage))


module.exports = router
