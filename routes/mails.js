const express = require("express");
const { mailToTeam } = require("../controllers/mail");
const router = express.Router({mergeParams:true})

// Simple endpoint to receive your form data and send an email
router.post('/leads', mailToTeam); 


module.exports = router;