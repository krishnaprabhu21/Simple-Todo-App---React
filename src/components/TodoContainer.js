import React, { Component } from 'react'
import Header from "./Header"
import TodosList from './TodosList';
import InputTodo from "./InputTodo"
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

export default class TodoContainer extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => {
                this.setState({ todos: response.data })
            }
            );
    }

    handleChange = id => {
        console.log("todo clicked", id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    addTodoItem = (title) => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false,
            })
            .then(response =>
                this.setState({
                    todos: [...this.state.todos, response.data],
                })
            )
    }

    delTodo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id
                        }),
                    ],
                })
            )
    };

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo
                    addTodoProps={this.addTodoItem}
                />
                <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}
                />
            </div>
        )
    }
}

