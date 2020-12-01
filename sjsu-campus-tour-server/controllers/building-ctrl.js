const Building = require('../models/building-model')

createBuilding = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a building',
        })
    }

    const building = new Building(body)

    if (!building) {
        return res.status(400).json({ success: false, error: err })
    }

    building
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: building._id,
                message: 'Buidling created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Building not created!',
            })
        })
}


getBuildingById = async (req, res) => {
    await Building.findOne({ _id: req.params.id }, (err, building) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!building) {
            return res
                .status(404)
                .json({ success: false, error: `Building not found`, data: building })
        }
        return res.status(200).json({ success: true, data: building })
    }).catch(err => console.log(err))
}

getBuildingByName = async (req, res) => {
    await Building.find({_id: req.params.id}, (err, building) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!building) {
            return res
                .status(404)
                .json({ success: false, error: `Building not found` })
        }
        return res.status(200).json({ success: true, data: building })
    }).catch(err => console.log(err))
}

getAllBuildings = async (req, res) => {
    await Building.find({}, (err, building) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!building) {
            return res
                .status(404)
                .json({ success: false, error: `Building not found` })
        }
        return res.status(200).json({ success: true, data: building })
    }).catch(err => console.log(err))
}


module.exports = {
    createBuilding,
    getBuildingById,
    getAllBuildings,
    getBuildingByName,
}


