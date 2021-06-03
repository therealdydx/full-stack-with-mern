# Front-End Web UI Frameworks and Tools: Bootstrap 4

## Summary of Web Design and Development

### Design

- UI/UX Design
- Visual Design
- Prototyping
- Colors, Graphics and Animation

### Deployment, Building and Deployment

- Web UI Frameworks: Bootstrap 4
- JavaScript Frameworks / Libraries: Angular, React
- Hybrid Mobile Frameworks: React Native, NativeScript
- Server-side Development: Node + Express + MongoDB

### Basic Web Architecture - 3 Tier Architecture

1. Presentation Layer
   - UI Framework - Bootstrap 4
   - JS Framework / React
2. Business Logic Layer
   - BaaS
   - NodeJS Modules
   - NodeJS
3. Data Access Layer
   - MongoDB

### What is Full Stack Web Development

- Frontend / Client Side
  - HTML, CSS and JavaScript
- Backend / Server Side
  - Ruby, Python, Java

## Basic Git Commands

- `git init`
  - Initializes the current folder as a git repository (master repository)
- `git status`
  - Current status of the folder
- `git add (file)`
  - Add files to staging area
- `git commit`
  - Commit the changes to the git repository
- `git log -oneline`
  - See a brief log of commits
- `git checkout`
  - Checkout the file from an older commit / If you don't like the file from the commit can remove it
- `git reset`
  - Reset staging area to last commit without disturbing the working directory
- `git reset <file>`
  - Unstage a staged file

- `git remote add origin <repository URL>`
  - Add the remote online repository
- `git push -u origin master`
  - Push local git repo to the origin of the master branch
- `git clone <repository URL>`
  - Clone an online repository to your computer

## Node.js and NPM

- Uses an event-driven non-blocking I/O model
  - Makes it lightweight and efficient

Node.JS Use cases:

- Utilities written in JavaScript for web development
  - Bower, Grunt, Gulp, Yeoman etc
- Server-side Development
  - Web server, Business logic, Database access

### Node Package Manager

- NPM manages ecosystem of node modules / packages
- A package contains
  - JS files
  - package.json (manifest)

## Basics of Node.js and NPM

### package.json

- A package.json file affords you a lot of great things:
  - Serves as documentation for what packages your project depends on
  - Allows you to specify the versions of a package that your project can use using semantic versioning
  - Makes your build reproducible, which means that its way easier to share with other developers

### Initializing package.json

- Type `npm init` to initialize, creating a package.json file in your git foler

### Installing NPM module

- Install an NPM module, lite-server that allows you to run Node.js based development web server and serve up your project files
- Type `npm install lite-server --save-dev`
- Open package.json in the editor and add two lines, in the "scripts" section, namely adding:

```json
{
  "name": "git-test",
  "version": "1.0.0",
  "description": "This is the Git and Node basic learning project",
  "main": "index.html",
  "scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  }
```

- Adding start and lite to the part in scripts

- Now you can start the development server by typing the following at the prompt, `npm start`

### Preventing Files from being commited

- Create a file called .gitignore, and add this to the file

```shell
node_modules
```

- Then do a git commit and push changes to the online repository

## Frontend UI Frameworks

- Collection of ready-to-use HTML, CSS and JavaScript templates for UI components:
  - Typography, Forms, Buttons, Tables, Navigations, Dropdowns, Alerts, Modals, Tabs, etc

- Responsive Web Design
- Cross-Browser Compatibility
- Increased Productivity
- Community Support