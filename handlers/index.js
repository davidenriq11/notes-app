const fs = require('fs')
const data = require('../data/values.js')

const addNote = (title, body) => {
  const notes = loadNotes(),
        duplicateNote = notes.find(note => note.title === title)

  if (duplicateNote) {
    console.log('Title taken!')
  } else {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log('Note added!')
  }
}
const deleteNote = (title) => {
  console.log(data.delete.message)

  const notes = loadNotes(),
        requestedNote = notes.filter(
          note => note.title === title
        )

  if (requestedNote.length > 0) {
    filteredNotes = notes.filter(
      note => note.title !== title
    )
    saveNotes(filteredNotes)
  } else (
    console.log('Requested note was not found')
  )

}
const listNote = () => {
  console.log(data.list.message)
  const notes = loadNotes()

  for (note of notes) {
    console.log(`Title: ${note.title}`)
    console.log(`Preview: ${note.body.slice(0, 10)}...`)
  }
}
const readNote = (title) => {
  console.log(data.read.message)

  const notes = loadNotes(),
        existingNote = notes.find(note => note.title === title)

  if (existingNote) {
    console.log(`Title: ${existingNote.title}`)
    console.log(`Note:\n${existingNote.body}`)
  } else {
    console.log('Requested note does not exists')
  }
}

const loadNotes = () => {
  try {
    const notes = fs.readFileSync('./data/notes.json'),
          notesJSON = notes.toString(),
          notesObject = JSON.parse(notesJSON)

    return notesObject
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const textNotes = JSON.stringify(notes)

  fs.writeFileSync('./data/notes.json', textNotes)
}

module.exports = {
  addNote: addNote,
  deleteNote: deleteNote,
  listNote: listNote,
  readNote: readNote,
}
