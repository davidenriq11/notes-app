const yargs = require('yargs')
const data = require('./data/values.js')
const handlers = require('./handlers/index.js')

yargs.command({
  command: data.add.task,
  aliases: ['a'],
  desc: data.add.description,
  handler: () => handlers.addNote(
    yargs.argv.title,
    yargs.argv.body,
  ),
  builder: {
    title: {
      desc: 'Note title',
      demand: true,
      type: 'string',
    },
    body: {
      desc: 'Note body',
      demand: true,
      type: 'string',
    },
  }
})

yargs.command({
  command: data.delete.task,
  aliases: ['rm', 'remove'],
  desc: data.delete.description,
  handler: () => handlers.deleteNote(
    yargs.argv.title
  ),
  builder: {
    title: {
      desc: 'Note title',
      demand: true,
      type: 'string',
    },
  }
})

yargs.command({
  command: data.list.task,
  aliases: ['ls'],
  desc: data.list.description,
  handler: handlers.listNote
})

yargs.command({
  command: data.read.task,
  aliases: ['r'],
  desc: data.read.description,
  handler: () => handlers.readNote(
    yargs.argv.title
  ),
  builder: {
    title: {
      desc: 'Note title',
      demand: true,
      type: 'string',
    },
  }
}).help().argv
