# GraphQL + Clean Code + Firestore

This project is implement graphQL in node js clean code architecture and using firestore for data store.

## Getting Started

* Before initialize project please install NodeJS. NodeJS can be found in [here] (https://nodejs.org/en/download)
* Also make sure you know about [firestore](https://firebase.google.com/docs/firestore) in firebase

## Pre-requisites 

Please install these dependencies to make sure everything is work fine.

* graphql package for GraphQL library in NodeJS 
* express package for Framework library using in NodeJS
* express_graphql package for Manage GraphQL model
* Firebase-admin package for using SDK firebase in NodeJS 

```
$ npm install graphql --save
$ npm install express --save
$ npm install graphq express-graphql --save
$ npm install firebase-admin --save
```

## Initialize Project 

clone this project https://github.com/farrellmochammad/gql-clean-code and install all dependencies on Pre-requisites. 

Assuming that you have knowledge in using firestore database, you can configure this project by adding 'serviceAccountKey.json' to repository package. This project will integrate automatically.

After you have installed all required dependencies , to start server type : 


```
$ node server.js
```

Make sure port 4000 in your machine is open. 

After you run server successfully, open http://localhost:4000/graphql in your web browser and you will see : 

![First](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/clean-code-1.PNG)


## Important Notes

Please make sure that you have file 'serviceAccountKey.json' and add it to repository package. This code will not work if these file are not in repository package. 

