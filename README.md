# GraphQL + Clean Code + Firestore

![wallpaper](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-wallpaper.PNG)

This project is implement graphQL in node js clean code architecture and using firestore for data store.

## Getting Started

* Before initialize project please install NodeJS. NodeJS can be found in [here](https://nodejs.org/en/download)
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

![article1](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-1.PNG)


## Important Notes

Please make sure that you have file 'serviceAccountKey.json' and add it to repository package. This code will not work if these file are not in repository package. 

## GraphQL learn  

Here i have todo class in model package and Todo class. 

```
class Todo {
    constructor(id,context){
      this.id = id
      this.context = context;
    }
    get Id() {
      return this.id;
    }
    set Id(id) {
      this.id = id;
    }

    get Context() {
        return this.context;
    }

    set Context(context) {
        this.context = context;
    }
      
    toString() {
      const output = {
        Id: this.id,
        context: this.context,
      };
  
      return JSON.stringify(output, null, 2);
    }
  }
  
  module.exports = Todo;
```

Class todo have 2 entity id and context. Id entity is used for get id from firestore and context entity is used for get string from firestore. Context is text that we add the todo list ex : 'Take a bath' etc. 

Please read documentation at [GraphQL](https://graphql.org/) to make you understand to use graphQL.

### Read All Todo Data 

![article2](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-2.PNG)

### Read All Todo Data by Id

![article3](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-3.PNG)

### Add Todo Data

![article4](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-4.PNG)

### Add Delete Data

![article5](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/clean-code-5.PNG)

## Using Restful API

GET localhost:4000/todos . To get all todos data

![rest1](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/rest-1.PNG)

GET localhost:4000/todo/:id . To get todo data by Id

![rest2](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/rest-2.PNG)

POST localhost:4000/todo . To add todo data

![rest3](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/rest-3.PNG)

DELETE localhost:4000/todo/:id . To delete todo data by Id

![rest4](https://raw.githubusercontent.com/farrellmochammad/gql-clean-code/master/github-assets/rest-4.PNG)

## Support 

If you want to implement my code or want to fix or improve. Maybe if i am doing wrong in my code, i am open for discussion. I am still learning NodeJS and GraphQL.
Also if you need help, email me at farrellmochammad@gmail.com



