const Roaster = require("../models/Roasters")
// const Chirp = require("../models/Chirp")


const getAllRoasters = (req, res) => {
    Roaster.find({}).then(roasters => {
        res.json(roasters)
    }).catch(err => {
        console.log(err)
        res.send("Error loading roasters")
    })
}

const getRoasterByCompanyName = (req, res) => {
    Roaster.find({ companyName: req.params.companyName }).then(roasters => {
        res.json(roasters)
    }).catch(err => {
        console.log(err)
        res.send(`Error loading roasters by "${req.params.companyName}"`)
    })
}

const getRoastersById = (req, res) => {
    Roaster.findOne({ _id: req.params.id }).then(roaster=> {
        res.json(roaster)
    }).catch(err => {
        console.log(err)
        res.send(`Error loading roaster with ID: "${req.params.id}"`)
    })
}

const createRoaster = (req, res) => {
    Roaster.create(req.body).then(roaster => {
        res.json(roaster)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating roaster`)
    })
}

const updateRoaster = (req, res) => {
    Roaster.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(roaster => {
            res.json(roaster)
    }).catch(err => {
        console.log(err)
        res.send(`Could not update roaster with ID: "${req.params.id}"`)
    })
}

const deleteRoaster = async (req, res) => {
    const roaster = await Roaster.findOne({ _id: req.params.id })

    // await Chirp.findOne({ _id: roaster.reChirp }).then(chirp => {
    //     chirp.comments.splice(chirp.comments.indexOf(req.params.id), 1)
    //     chirp.save()
    // })

    roaster.delete().then(roaster => {
        res.send(`${roaster.companyName}'s comment "${roaster.body}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete roaster with ID: "${req.params.id}"`)
    })
}

module.exports = {
    getAllRoasters,
    getRoasterByCompanyName,
    getRoastersById,
    createRoaster,
    updateRoaster,
    deleteRoaster
}