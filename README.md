# maruthiiyc
# maruthi iyc webpage

# Here, I will explain the step of deployment of AngularJs App, using NodeJs on windows. 

# Prerequisites
Node.Js should be installed into your machine.  Source - https://nodejs.org/en/download/
        
# Set up AngularJS Project.

The steps are given below-
Create one folder named "MyProject" or "maruthiiyc"
Create sub folder inside MyProject named "App" -- This folder will contain the project files and resources.

# Take one "package.json" file inside "MyProject" or "maruthiiyc" Folder and put the content, as given below-
1. If folder name is "maruthiiyc" then change "MyProject" to "maruthiiyc" below.

#############

{  
  "name": "MyProject",  
  "version": "0.0.1",  
  "description": "My Project",  
  "dependencies": {  
    "express": "*"  
  },  
  "engine": "node >=0.6.x",  
  "scripts": {  
    "start": "node server.js"  
  },  
  "main": "server.js",  
  "repository": {  
    "type": "git",  
    "url": ""  
  },  
  "author": "MyProject",  
  "license": "MyProject",  
  "bugs": {  
    "url": ""  
  },  
  "homepage": ""  
}  

#############

# Take one "Server.js" file inside, as given below-
# Here, you can define your own port and put IP of your machine in place of "localhost".

#####

var express = require('express');  
var app = express();  
  
app.use(express.static("App"));  
  
app.get('/', function (req, res) {  
    res.redirect('/');  
});  
  
app.listen(8080, 'localhost');  
console.log("MyProject Server is Listening on port 8080"); 

####

# Navigate to folder "MyProject" or maruthiiyc, using command prompt like 
# Now, type command npm install

It will be, as given below, you might see different message if you are installing for first time.

C:\MyProject>npm install
npm WARN MyProject@0.0.1 license should be a valid SPDX license expression

up to date in 0.881s


   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.5.1 → 5.6.0    │
   │     Run npm i -g npm to update      │
   │                                     │
   ╰─────────────────────────────────────╯

# It will install npm and create a folder with the name "node_modules". Also, it will install the dependencies, which you will put inside package.json file.
 
# Now, type command npm start and it will start npm, as shown below-

> MyProject@0.0.1 start C:\MyProject
> node server.js

MyProject Server is Listening on port 8080


# If its localhost type this url to see the website - http://lcalhost:8080/

