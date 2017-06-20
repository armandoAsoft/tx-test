# Test TX
## Structure Project
The Test TX project is composed for the next folders:
+ __app__
  This folder contain an app AngularJS application.
+ __dist__
  This folder contain the JS and CSS minified files.

## Build minified files
In order to install the dependencies necessaries to Test TX project we need run the next commands on terminal. We need to be sure that we are located on the root folder of project.

+ __Install gulp__
```
npm install -g gulp
```
+ __Install the dependencies__
```
npm install
```
+ __Build the minified files__
Every time that any file is changed, is necessary to rebuild the minified files
```
gulp build
```

The application automatically will open the default browser.

When we run the command: gulp build the minified files are copied inside the folder 
/dist.