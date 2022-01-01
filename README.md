# Notes App
A small notes app built using NodeJS

```node app.js```

## ➕ Add:
### Add a new note
###### Need to include title and body
```node app.js add --title="My Note" --body="Here is my note...."```

## ➖ Remove:
### Remove a note
###### Need to specify the note's title
```node app.js remove --title="My Note"```

## 📋 List:
### List all notes
```note app.js list```

## 🔍 Read:
### Read a Note
###### Need to specify the note's title
```node app.js read --title="My Note"```

<div align="center">
<h3 align="center">Notes App</h3>

  <p align="center">
    A small notes app built using NodeJS
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

To use the notes app simple run it in node using the command line with `node app.js` followed by one of the following commands: `add` `remove` `list` `read`. When calling a command, pass the **title** and **body** parameters.

### Built With

* [NodeJS](https://nodejs.org/en/)
* [Yargs](https://www.npmjs.com/package/yargs)
* [Chalk](https://www.npmjs.com/package/chalk)

## Commands
Notes are saved into a .json file and managed via the command prompt using the following commands.

### Add
Use the `add` command to add a new note. The title of your note must be unique.
```node app.js add --title="My Note" --body="Something about my note....."```

### Remove
Use the `remove` command to delete a note.
```node app.js remove --title="My Note"```

### List
Use the `list` command to list all of the notes.
```node app.js list```

### Read
Use the `read` command to open a specific note.
```node app.js read --title="My Note"```