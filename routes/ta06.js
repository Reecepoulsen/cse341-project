const express = require("express");
const router = express.Router();

const controllerTA06 = require('../controllers/controllerTA06');

router.get("/", controllerTA06.getIndex);

router.get('/register', controllerTA06.getRegister);

router.get('/login', controllerTA06.getLogin);

router.post('/register', controllerTA06.postRegister);

router.post('/login', controllerTA06.postLogin);

module.exports = router;
