# React Gallery

## Description

_Duration: weekend challenge_

This is display of a gallery built with React. The data are stored in a postgreSQL database, and the client-side display these data (image, name, description, and likes). User can click the heart button to "like" an image. They can also upload images to the database with a URL link or from a local file (made possible with multer - middleware for uploading files). In addition, user can delete images, which also removes data from the database. Addition UI styling such as collapsing/expanding the image text or hiding the image were made using MUI. 

## Installation

1. Create a database named `weekend-gallery`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. Please use [PostgreSQL] and [Postico].
3. Open up your editor of choice and run an `npm install`
4. Open two terminal windows
5. Run `npm run server` in your first terminal window
6. Run `npm run client` in your second terminal window

## Screen Shots

![Screenshot](/wireframes/Screenshot.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/v1.php)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Axios.js](https://axios-http.com)
- [Material UI](https://mui.com/)
- [Multer](https://github.com/expressjs/multer)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 