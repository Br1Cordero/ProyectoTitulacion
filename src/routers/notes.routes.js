const { Router } = require('express')
const router = Router();

const { 
    renderNotesFrom, 
    createNewNote, 
    renderNotes, 
    renderEditNote, 
    updateNote, 
    deleteNote
} = require ('../controllers/notes.controller.js')

router.get('/notes', renderNotes)
router.get('/notes/add', renderNotesFrom)
router.post('/notes/new-note', createNewNote)
router.get('/note/edit/:id', renderEditNote)
router.put('/notes/edit/:id', updateNote)
router.delete('/notes/delete/:id', deleteNote)

module.exports =  router