# Bootstrap Features

## Navigation

### Navigation Bars

- Users often expect it at the top of the website
- Contains links to various pages within your website

### Do's and Don'ts:

- Use simple, user-friendly terms
- Standardize navigation
- Provide indication of the location within the navigation hierachy
- Use standard web conventions
  - Clicking on a logo takes you back to the home page
- Don't have too many items
- Don't use generic labels

### Breadcrumbs

- Home > Menu > Appetizers
- Secondary navigation
  - Usually placed below the primary navigation and above the content

- Indicator of the current page's location within a navigational hierarchy
  - Path based: set of steps
  - Location based: hierarchy
  - Attribute based: set of choices

## Icon Fonts

- Set of symbols and glyphs
- Can be used just like regular fonts
- Can be styled with CSS just like regular fonts
- Popular lightweight replacement for simple graphics on the website
- Many icon font packs available
- A popular font is using Font Awesome
- Another common one is Bootstrap-social

### Downloading Icon Fonts

### Using Icon Fonts and Other CSS classes

- One of the most popular icon font toolkit is Font Awesome. Go to its website http://fontawesome.io/ to check out more details about this icon font. You can get Font Awesome using npm by typing the following at the prompt:

```shell
npm install font-awesome@4.7.0 --save
```

- Another module that we install is Bootstrap Social that enables the addition of Social buttons to our site. You can find more information about it at https://lipis.github.io/bootstrap-social/. To install it using npm, type the following at the prompt:

```shell
npm install bootstrap-social@5.1.1 --save
```

- We now need to include the CSS files for font awesome and bootstrap-social in the index.html file. Add the following code to the head of the file after the links for importing Bootstrap CSS classes. Do the same change to aboutus.html file:

```html
<link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
```

## User Input and Designs

Common Inputs / Designs:

- Buttons
- Forms
- Tables
- Images and Media
- Alerts
- Progress Bars

