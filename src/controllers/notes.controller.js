const Note = require('../models/Note')
require('colors')

const notesCtrl = {};
notesCtrl.renderNotesFrom = (req, res) => {
    res.render('notes/new-notes')
}

notesCtrl.createNewNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = new Note({ title, description })
        await newNote.save()
        req.flash('message', 'Note Added Successful')
        res.redirect('/notes')
    }
    catch (error) {
        console.error(`${error}`.red)
        return next(error)
    }
}

notesCtrl.renderNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.render('notes/all-notes', { notes })
    }
    catch (error) {
        console.log(`${error}`.red)
    }
}

notesCtrl.renderEditNote = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        console.log(`Se ha encontrado la nota`.green)
        res.render('notes/edit-note', { note });
    } catch (err) {
        console.error(`${err}`.red)
        res.status(500).json({ message: 'Error en el servidor' })
    }
}

notesCtrl.updateNote = (req, res) => {
    console.log(req.body)
    res.send('Edit Note')
}

notesCtrl.deleteNote = async (req, res) => {
    try {
        const id = req.params.id
        await Note.findByIdAndDelete(id)
        res.redirect('/notes')
    } catch (error) {
        console.log(`${error}`.red)
        res.status(500).json({ message: 'Error en el servidor' })
    }
}

module.exports = notesCtrl

