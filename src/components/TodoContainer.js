import React, { Component } from 'react'
import Header from "./Header"
import TodosList from './TodosList';
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

export default class TodoContainer extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
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

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    };

    addTodoItem = (title) => {
        const newTodoItem = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodoItem]
        });
    }

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

