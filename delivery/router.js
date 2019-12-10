var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');// GraphQL schema

const TodoUsecase = require('../usecases/todo');

class Router {
    constructor(){
        this.app = express()
    }

    async startServer(){
        var todoUsecase = new TodoUsecase();

        var schema = buildSchema(`
            type Query {
                todo(id: String): Todo
                todos: [Todo]
            },
            type Mutation {
                addTodo(context: String): Todo
                deleteTodo(id: String): String
            },
            type Todo {
                id: String
                context: String
            }
        `)

        var root = {
            todo: todoUsecase.ReadId,
            todos: todoUsecase.GetTodoData,
            addTodo: todoUsecase.AddTodoData,
            deleteTodo: todoUsecase.DeleteTodoData
        };

        this.app.use('/graphql', express_graphql({
            schema: schema,
            rootValue: root,
            graphiql: true
        }));

        this.app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

    }

}

module.exports = Router;






