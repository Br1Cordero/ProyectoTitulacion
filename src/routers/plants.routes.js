const { Router } = require('express')
const router = Router();

const { 
    renderPlantsFrom, 
    createNewPlant, 
    renderPlants, 
    renderEditPlants, 
    updatePlant, 
    deletePlant
} = require ('../controllers/plants.controller.js')

router.get('/plants', renderPlants)
router.get('/plants/add', renderPlantsFrom)
router.post('/plants/new-plant', createNewPlant)
router.get('/plants/edit/:id', renderEditPlants)
router.put('/plants/edit/:id', updatePlant)
router.delete('/plants/delete/:id', deletePlant)

module.exports =  router