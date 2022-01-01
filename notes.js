fs = require('fs')
chalk = require('chalk')

function getNotes(note) {
    fs.writeFileSync('notes.txt', note)
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added'))
    } else {
        console.log(chalk.red('A note with this title already exists!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const newArray = notes.filter(function(n) {
        return n.title !== title
    })
    if (newArray.length < notes.length) {
        saveNotes(newArray)
        console.log(chalk.bgGreen.bold.black(title) + chalk.bgGreen.black(' Removed'))
    } else {
        console.log(chalk.white.bgRed.bold(' No matching note found '))
        console.log(chalk.underline('Here are the current notes:'))
        for (const n of notes) {
            console.log(chalk.yellow('• ' + n.title))
        }
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const datastring = dataBuffer.toString()
        return JSON.parse(datastring)
    } catch (e) {
        return []
    }
    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}