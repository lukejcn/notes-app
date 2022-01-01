fs = require('fs')
chalk = require('chalk')

const getNotes = (note) => {
    fs.writeFileSync('notes.txt', note)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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

const removeNote = (title) => {
    const notes = loadNotes()
    const newArray = notes.filter((n) => n.title !== title)
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

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(chalk.magenta('No notes exist. Feel free to create one!'))
    } else {
    console.log(chalk.underline('Your Notes:'))
    notes.forEach((note) => {
        console.log('- ' + note.title)
    })
}
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes
}