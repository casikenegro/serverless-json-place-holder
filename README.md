## Can I use docker? 😎

We got your back, the project already uses docker so you can build docker image 
1.  Clone this repo
2.  Copy the  `.env.example`  file over to your own  `.env`  file and update the variables
3.  Run  `docker-compose up -d`  to setup local environment with Docker

## Installation

### local dev

```bash
npm install
```

###  Run Migrations
Migrations are created in our database in Docker and seeds will be pushed.
```bash
$ prisma migrate dev 
```

###  Run Seed
Only the seeds are inserted.
```bash
$ prisma db seed
```
## Description

  

[Serverless](https://www.serverless.com/) AWS Lambda easily with the Serverless Framework 😎.
[PRISMA](http://prisma.io/) ORM starter Package.
  
```

## Running the app


```bash

# development

$ npm run sls:dev

```
###  Swagger

```bash

# development

localhost:3000/swagger

```