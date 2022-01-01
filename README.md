<div align="center">
<h3 align="center">Notes App</h3>

  <p align="center">
    A small notes app built using NodeJS
</div>



To use the notes app simply run it in node using the command line with `node app.js` followed by one of the following commands: `add` `remove` `list` `read`. When calling a command, pass the **title** and **body** parameters.

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