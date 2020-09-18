import React from 'react'

function TodoItem(props) {
    const {
        todo: { completed, id, title },
        handleChangeProps, deleteTodoProps
    } = props;
    const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    return (
        <li className="todo-item">
            <input type="checkbox"
                checked={completed}
                onChange={() => handleChangeProps(id)}
            />
            <button
                onClick={() => deleteTodoProps(id)}>
                Delete
                </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    )
}

export default TodoItem;
