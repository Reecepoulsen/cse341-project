const express = require("express");
const router = express.Router();

const controllerTA06 = require('../controllers/controllerTA06');

router.get("/", controllerTA06.getIndex)

module.exports = router;
