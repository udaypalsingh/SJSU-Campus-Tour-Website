

const express = require('express')

const BuildingCtrl = require('../controllers/building-ctrl')

const router = express.Router()

router.post('/building', BuildingCtrl.createBuilding)
router.get('/building/:id', BuildingCtrl.getBuildingById)
router.get('/getBuildings', BuildingCtrl.getAllBuildings)


module.exports = router;

