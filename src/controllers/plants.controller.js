const Plants = require('../models/Plants')
require ('colors')


const PlantsCtrl = {};
PlantsCtrl.renderPlantsFrom = (req, res) => {
    res.render('plants/new-plants')
}

PlantsCtrl.createNewPlant = async (req, res) => {
    const { name, description, plague} = req.body;
    const newPlants = new Plants({name, description, plague})
    await newPlants.save()
    res.redirect('/plants')
    
}

PlantsCtrl.renderPlants = async (req, res) => {
    const plants  =  await  Plants.find()   
    res.render('plants/all-plants', {plants})
}

PlantsCtrl.renderEditPlants = async (req, res) => {
    const id = req.params.id
    const plants = await Plants.findById(id)
    .then(console.log(`Editing Plants ${id}`.green))
    .catch(console.log(`No editing Plants ${id}`.red))
    res.render('plants/edit-plant', {plants})
}

PlantsCtrl.updatePlant = (req, res) => {
    res.send('Edit Plants')
}


PlantsCtrl.deletePlant = async (req, res) => {
    const id = req.params.id
    await Plants.findByIdAndDelete(id).then(console.log(`Delete Plants: ${id}`.red))
    res.redirect('/plants')
}

module.exports = PlantsCtrl