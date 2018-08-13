# MEAN Stack Practice 
## Project Description 

MEAN - MongDb, ExpressJs, Angular, Node.js.
This project is split into 2 parts; the front end running Angular, and the backend using Node, Express, and MongoDb to store and retrieve data. 
The backend is hosted on an AWS Elastic Beanstalk server with the frontend is static hosting on S3.
<br><br>
This is essentially a mini social network, there is a page of user post's that everyone can view. In order to create 
a new post you have to sign up and login; from there you can add, edit, or delete your own posts but won't have access to
affect other user's posts. A new post requires a Title, Image upload, and some content to display.
<br><br>
[Live Project](http://mean-angular-node.wbarteck.s3-website-us-east-1.amazonaws.com/)

## Features

### Front-End

The front-end mainly uses Angular along with the Angular Material library to do basic formatting and styling.
Angular-CLI was used to boostrap the file structure with HTML and typescript files along with the node.js files. T
he front-end runs on a separate server front the back-end and uses appropriate CORS headers to communicate. 
<br><br>
This is based on a Single-Page-Application model, dynamically loading and unloading components as needed. As a SPA it
stores an authentiction token in the browser local storage for a set duration until expiring. The front-end communicates with the back 
to validate authentication and provide authorization for users to edit/delete and create new posts.

### Back-End

Utilizing node and express to handle the RESTful API that the front-end communicates with, this part is entirely separate and can be 
theoretically connected through any kind of front-end application. This facet of the project handles the real authentication and 
authorization between the browser and the database; storing encrypted passwords and cross-referencing posts with their associated user.
<br><br> 
Image-upload is also authenticated and stored on the back-end, then referenced with a url in in the database for the front-end to display.
