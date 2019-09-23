# Notes App
Notes application for command line written in Node.js@12.0.0

## Dependencies
This app requires Node.js v12.10.0 and NPM v6.10.3. Download them from the [Node official website](https://nodejs.org/es/)

## Installation
Download and unzip the repo, open a terminal in your containers fdoler and run:

```
npm install
```

## Usage
### Add notes
To add notes use

```
node app.js add --title="Your note's title" --body="Your note"
```

both fields `title` and `body` are **mandatory.**

Alias: `node app.js a`

### List notes
To list existing notes use

```
node app.js list
```

Alias: `node app.js ls`

### Read notes
To read an existing note use

```
node app.js read --title="Your note's title"
```

field `title` is **mandatory.**

Alias: `node app.js r`

### Delete notes
To delete an existing note use

```
node app.js delete --title="Your note's title"
```

field `title` is **mandatory.**

Alias: `node app.js rm`

## Help
Type in your console

```
node app.js --help
```

for command help and description.

## Notes on notes app
This app was written for the course "The complete Node.js developer course (3rd edition)", it may be useful for someone.
