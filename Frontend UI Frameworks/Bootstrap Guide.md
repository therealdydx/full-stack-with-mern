# Bootstrap Fundamentals

### Setting up the Project Folder

- Go to a convenient folder location on your computer and download the ***Bootstrap4-starter.zip\*** file using the link provided at the top of this page.
- Unzip the file to see a folder named ***Bootstrap4*** and a sub-folder under it named ***conFusion*** created. Move to the *conFusion* folder.
- Open a cmd window/terminal and move to the conFusion folder.
- At the prompt type

```shell
npm install
```

- This will install the lite-server node module to your project.
- Next, initialize a Git repository in the project folder, and then set up a .gitignore file with the contents as shown below:

```shell
node_modules
```

- Now do a commit of your project folder to the Git repository with the message "Initial Setup". You will be doing a commit of your project at the end of each exercise so that you retain the completed files of each exercise.
- Set up an online Git repository and synchronize your project folder with the online repository.

### Downloading Bootstrap

- You will use npm to fetch the Bootstrap files for use within your project. Thereafter you need to install JQuery and Popper.js as shown below since Bootstrap 4 depends on these two. At the prompt, type the following to fetch Bootstrap files to your project folder:

```shell
npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save
```

- This will fetch the Bootstrap files and store is in your node_modules folder in a bootstrap folder. The bootstrap->dist folder contains the precompiled Bootstrap CSS and JS files for use within your project.

- Open your project folder in your editor, and then open the index.html file in the *conFusion* folder. This is your starting web page for the project. We have already created the web page with some content to get you started. We will use Bootstrap to style this web page, and learn Bootstrap features, classes and components along the way.
- Start your lite-server by typing **npm start** at the prompt. The *index.html* file should now be loaded into your default browser.

### Getting your Web page Bootstrap ready

- Open the *index.html* file in your favourite text editor. If you are using Visual Studio Code, Brackets, Sublime Text or similar editors, you can open the project folder in the editor and then view index.html.
- Insert the following code in the *<head>* of *index.html* file before the title.

```html
<!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

- This will include Bootstrap CSS into your web page. Note the subtle change in the fonts of the content of the web page. This is the Bootstrap typography effect coming into play. The default Bootstrap typography sets the font to Helvetica Neue and selects the appropriate font size based on the choice of the heading style and paragraph style for the content.
- At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library, popper.js library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.

```html
<!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

## Responsive Design

Foundations of Responsive Design:

- Grid System
  - Bootstrap Grid System
- Fluid Images
  - We'll look at Bootstrap support later
- Media Queries

## Bootstrap Grid

```html
<div class = "container">
    <div class = "row">
        <!-- There are 12 columns in the row -->
    </div>
</div>
```

### Horizontal Alignment

- Bootstrap makes available five classes
  - default targets all screen sizes from extra small to extra large
  - sm for small
  - md for medium
  - lg for large
  - xl for extra large screen sizes
- Each row in Bootstrap grid system is divided into 12 columns
- Use the classes `.col-*`, `.col-sm-*`, `.col-md-*`, `.col-lg-*` for defining the layouts for various screen sizes
- Specify how many columns each piece of content will occupy within a row, all adding up to 12 or a multiple thereof
- Bootstrap will auto-layout columns

### Vertical Alignment

```html
<div class = "container">
    <div class = "row align-items-center">
        <!-- Aligned items in the center of the height -->
        <div class = "col-3"></div>
        <div class = "col-auto"></div>
    </div>
</div>
```

### Column Offsets

```html
<div class = "container">
    <div class = "row align-items-center">
        <!-- Aligned items in the center of the height -->
        <div class = "col-sm-4 offset-sm-1"></div> <!-- Create offset -->
        <div class = "col-sm-7"></div>
    </div>
</div>
```

### Bootstrap Grid System and Responsive Design

Bootstrap is designed to be mobile first, meaning that the classes are designed such that we can begin by targeting mobile device screens first and then work upwards to larger screen sizes. The starting point for this is first through media queries. We have already added the support for media queries in the last lesson, where we added this line to the head:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

The *viewport* meta tag ensures that the screen width is set to the device width and the content is rendered with this width in mind. This brings us to the second issue, designing the websites to be responsive to the size of the viewport. This is where the Bootstrap grid system comes to our aid. 

### Using a Container class

- We use the container class to keep content within a fixed width on the screen, determined by the size of the screen. The alternative is to use the container-fluid class to make the content automatically to span the full width of the screen. We will discuss further about this when we discuss the Bootstrap grid system in the next lecture. Add the container class to the first div right after the `</header>` in the file as follows.

```html
<div class="container"> ...
```

### Dividing the content into rows

- Let us now add the class *row* to the first-level inner *div* elements inside the container. This organizes the page into rows of content. In the next exercise, we will see how we can add other classes to the rows.

```html
<div class="row"> ...
```

### Creating a Jumbotron

- Let us add the class jumbotron to the header class as shown below. This turns the header element into a Bootstrap component named Jumbotron. A jumbotron is used to showcase key content on a website. In this case we are using it to highlight the name of the restaurant.

```html
<header class="jumbotron"> ... 
```

- In the header add a **container** class to the first inner div and a row class to the second inner div.

### Creating a footer

- Finally, in the footer add a **container** class to the first inner div and a row class to the second inner div.

### Applying column classes within each row

- In the header row, we will display the restaurant name and the description to occupy 6 columns, while we will leave six columns for displaying the restaurant logo in the future. Let us go into the jumbotron and define the classes for the inner divs as follows:

```html
<div class="col-12 col-sm-6"> ... </div>

<div class="col-12 col-sm"> ... </div>
```

- For the remaining three div rows that contain the content, let us define the classes for the inner divs as follows:

```html
<div class="col-12 col-sm-4 col-md-3"> ... </div>

<div class="col col-sm col-md"> ... </div>
```

- For the footer, let us define the classes for the inner divs as follows:

```html
<div class="col-4 col-sm-2"> ... </div>

<div class="col-7 col-sm-5"> ... </div>

<div class="col-12 col-sm-4"> ... </div>

<div class="col-auto"> ... </div>
```

Now you can see how the web page has been turned into a mobile-first responsive design layout.

### Using Order and Offset with column layout classes

- In the content rows, we would like to have the title and description to alternate so that it gives an interesting look to the web page. For extra small screens, the default stacked layout works best. This can be accomplished by using the .order-sm-last and .order-sm-first for the first and the third rows as follows:

```html
<div class="col-12 col-sm-4 order-sm-last col-md-3"> ... </div>

<div class="col col-sm order-sm-first col-md"> ... </div>
```

### List styles

- You can use several list styles to display lists in different formats. In this exercise, we will use the unordered list style *list-unstyled* to display the links at the bottom of the page without the bullets. To do this, go to the links in the footer and update the ul as follows:

```html
<ul class="list-unstyled"> ... </ul>
```

### Using Custom CSS classes

We can define our own custom CSS classes in a separate CSS file, and also customize some of the built-in CSS classes. We will now attempt to do this in this part of the exercise.

- Create a folder named ***css***. Then create a file named *styles.css* in the ***css*** folder. Open this file to edit the contents. Add the following CSS code to the file:

```css
.row-header{
    margin:0px auto;
    padding:0px;
}

.row-content {
    margin:0px auto;
    padding: 50px 0px 50px 0px;
    border-bottom: 1px ridge;
    min-height:400px;
}

.footer{
    background-color: #D1C4E9;
    margin:0px auto;
    padding: 20px 0px 20px 0px;
}
```

