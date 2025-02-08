# beschwerde-app-backend
this is the backend of the beschwerde app, it is a simple express server that connects to a mysql database and provides an api for the frontend to interact with the database

## What is the beschwerde app
the beschwerde app is a simple app that allows users to submit complaints, the complaints are stored in a database and can be viewed by other users, the app is a simple example of a full stack web application

## How to run the project
first you need to set the [environment](./.env.example) variables in a file called `.env` in the root directory of the project, the file should contain the following variables:
```env
HTTP_PORT="3000"
DB_PORT="3306"
DB_HOST="127.0.0.1"
DB_USER="root"
DB_PASS="root"
DB_NAME="db"
```
then you need to create the database by running the following command:
```bash
npm install
```
then you can run the project by running the following command:
```bash
npm run start
```
the project will be running on port 3000

OR you can run the project in development mode by running the following command:
```bash
npm run dev
```
