# Houlak Spotify Albums Web Project

## Requirements / Intro

Simple web application that allows you to search for an artist, view their albums and view their search history.

<p>
<img width='300' src='' </img>
</p>

## Deploy

Backend
**LINK DEPLOY BACKEND**

Frontend
**LINK DEPLOY FRONTEND**

## Version

__IMPORTANT:__ 
It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it to be able to correctly install the necessary dependencies to run the project.

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

