# Houlak Spotify Albums Web Project

## Requirements / Intro

Simple web application that allows you to search for an artist, view their albums and view their search history.

<p style="text-align:center;">
<img width='500' src='https://i.postimg.cc/P5VfQDh2/1.png' </img>
<img width='500' src='https://i.postimg.cc/9f4m8fQV/2.png' </img>
<img width='500' src='https://i.postimg.cc/FsZH1q6t/3.png' </img>
<img width='500' src='https://i.postimg.cc/wBS6Sd1N/4.png' </img>
</p>

## Deploy

Backend
https://spotify-albums-web-project.herokuapp.com/

Frontend
https://deploy-spotify-app-front.vercel.app/

## Version

__IMPORTANT:__ 
It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it to be able to correctly install the necessary dependencies to run the project.

Currently the required versions are:

 * __Node__: 16.13.1 
 * __NPM__: 8.1.2 
 * __axios__: 0.27.2
 * __react__: 18.2.0
 * __redux__: 4.2.0
 * __cookie-parser__: 1.4.6
 * __dotenv__: 16.0.1
 * __express__: 4.18.1
 * __morgan__: 1.10.0
 * __nodemon__: 2.0.18
 * __pg__: 8.7.3
 * __sequelize__: 6.21.2
 * __PostgreSQL__

To check which version you have installed:

> node -v
>
> npm -v

## BoilerPlate

The boilerplate has two folders: `Backend` and `Frontend`.

In `Backend` create a file called: `.env` that has the following form:

```
DB_USER = "postgres"
DB_PASSWORD = "1234" 
DB_HOST = "localhost"
```

Replace `postgresuser` and `postgrespassword` with your own credentials to connect to postgres. This file will be ignored when uploading to github, as it contains sensitive information (credentials).

Additionally, it will be necessary to create a database called `houlak` from psql

The `Frontend` content was created using: Create React App.

