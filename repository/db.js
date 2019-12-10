const admin = require('firebase-admin');
const TodoModel = require('../models/todo');
var serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todolist-server.firebaseio.com"
  });
  

class Database {

    constructor(){
      this.admin = admin;
      this.todoModels = [];
      this.todoModel = {};
      this.serviceAccount = serviceAccount;
      this.deleteStatus = false;
    }
    
    get Admin() {
      return this.admin;
    }

    set Admin(admin) {
      this.admin = admin;
    }

    get ServiceAccount(){
        return this.serviceAccount;
    }

    set ServiceAccount(serviceAccount) {
       this.serviceAccount = serviceAccount;
    }

    get TodoModel(){
      return this.todoModel
    }

    set TodoModel(todoModel){
      this.todoModel = todoModel
    }

    get DeleteStatus() {
      return this.deleteStatus
    }

    set DeleteStatus(status){
      this.deleteStatus = status
    }

    get DB(){
        return this.admin.firestore();
    }

    async AddToDatabase(text){
      await this.DB.collection('todo').add({
        context: text,
      }).then(ref => {
        this.todoModel = new TodoModel(ref.id,text)
      });
    }

    async DeleteFromDatabase(id){
      await this.DB.collection('todo').doc(id).delete().then(function() {
          this.deleteStatus = true
      }).catch(function() {
          console.log('kesini ?')
          this.deleteStatus = false
      });
    }

    async ReadDatabase(){
      var todosData = []
      await this.DB.collection('todo').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            var todomodel = new TodoModel(doc.id,doc.data().context) 
            todosData.push(todomodel)
        });
        this.todoModels = todosData
      })
      .catch(() => {
          return null
      });
    }

    toString() {
      const output = {
        admin: this.admin,
        serviceAccount: this.serviceAccount,
      };
  
      return JSON.stringify(output, null, 2);
    }

  }
  
  module.exports = Database;

