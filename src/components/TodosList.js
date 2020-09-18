import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodosList extends Component {

    render() {
        const { todos, handleChangeProps, deleteTodoProps } = this.props;

        return (
            <div>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={handleChangeProps}
                        deleteTodoProps={deleteTodoProps}
                    />
                ))}
            </div>
        )
    }
}
