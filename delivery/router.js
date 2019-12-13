var express = require('express');
var express_graphql = require('express-graphql');
var bodyparser = require('body-parser');
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

        this.app.use(bodyparser.json());

        this.app.use('/graphql', express_graphql({
            schema: schema,
            rootValue: root,
            graphiql: true
        }));

        this.app.get('/todos', async function (req,res,next){
            res.json({
                'todos': await todoUsecase.GetTodoData()
            })
        })

        this.app.get('/todo/:id', async function (req,res,next){
            res.json({
                'todo':  await todoUsecase.ReadId(req.params)
            })
        })

        this.app.post('/todo', async function (req,res,next){
            res.json({
                'todo':  await todoUsecase.AddTodoData(req.body)
            })
        })

        this.app.delete('/todo/:id', async function (req,res,next){
            res.json({
                'status': await todoUsecase.DeleteTodoData(req.params)
            })
        })

        this.app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

    }

}

module.exports = Router;






