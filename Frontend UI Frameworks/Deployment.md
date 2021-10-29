# Building and Deployment

- Web development and deployment involves a lot of repetitive tasks
- The DRY principle (do not repeat yourself)
- Need to build tools to automate tasks

### CSS Tasks

- Compiling Sass or Less into CSS
- Running autoprefixer to add any vendor prefixes that are needed for different browsers
- Minification: Removing unnecessary characters like spaces and newlines
- Concatenation: Concatenate all the css and js files into a single file for easier download

### JavaScript

- JSHint: Checking JS code for errors and potential problems
- Concatenation
- Uglification: minification + mangling (reduce local variables to single letters)
- Rechecking for errors

### Other Tasks

- Images: Optimizing files to reduce file size
- Watch: Watching for changes in files and automatically re-running tasks
- Server and Livereload
- Testing
- Building your site for deployment

## Working on NPM Scripts

### Watching for Changes and Parallelshell

- Change package.json and install npm package
- Onchange can watch files in the project folder
- Parallelshell allows executing multiple NPM scripts in simultaneous, and carry out other tasks

### Serving Files

- You want to minimise the number of downloads that the browser needs to do to render the website
- Combine all the CSS code and the JS code into one single file
- You can use NPM modules to accomplish this, using rimraf to clean out a dist folder
- Afterwards, install copyfile to copy files into the distribution folder
- npm run clean deletes the folder, copyfiles copies files into the dist folder
- Now download imagemin, and also set up the script as such
- Now don't check the dist folder, so add it to git-ignore
- Now install 3 other node modules to make changes to the html files
- Transform HTML and combine all the css files into a single css file into the folder using usemin-cli
- But usemin-cli uses cssmin, uglifyjs and htmlmin

### Task Runners

- Configure the tasks once, and rerun it automatically as many times as needed
- NPM scripts written in package.json to execute tasks
- Build systems for the web, use Grunt or Gulp

