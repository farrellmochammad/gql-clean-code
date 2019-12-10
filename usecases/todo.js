const dbModel = require('../repository/db');

class Todo {

    async ReadId(args){
        var id = args.id

        this.db = new dbModel()
        
        await this.db.ReadDatabase()

        let tododatas = this.db.todoModels

        return tododatas.filter(todo => {

            return todo.id == id;

        })[0];
    }

    async GetTodoData(){ 
        this.db = new dbModel()

        await this.db.ReadDatabase()

        return this.db.todoModels
    }

    async AddTodoData(data){
        this.db = new dbModel()

        await this.db.AddToDatabase(data.context)

        return this.db.todoModel
    }

    async DeleteTodoData(data){
        this.db = new dbModel()

        await this.db.DeleteFromDatabase(data.id)

        if (this.db.deleteStatus) {
            return 'Document id ' + data.id + ' successfully deleted'
        } else {
            return 'Error Delete document'
        }
    }
}

module.exports = Todo;