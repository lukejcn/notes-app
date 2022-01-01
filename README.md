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
```sh
node app.js add --title="My Note" --body="Something about my note....."
```

### Remove
Use the `remove` command to delete a note.
```sh
node app.js remove --title="My Note"
```

### List
Use the `list` command to list all of the notes.
```sh
node app.js list
```

### Read
Use the `read` command to open a specific note.
```sh
node app.js read --title="My Note"
```

## Contact

Luke Jones - [@lukejcn](https://github.com/lukejcn)

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Andrew Mead](mead.io)