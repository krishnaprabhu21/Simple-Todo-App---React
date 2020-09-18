import React, { Component } from 'react'

export default class InputTodo extends Component {
    state = {
        title: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitHandler = (e) => {
        const { addTodoProps } = this.props;
        e.preventDefault();
        addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitHandler} className="form-container">
                    <input
                        type="text"
                        className="input-text"
                        name="title"
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChangeHandler}
                    />
                    <input type="submit"
                        className="input-submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}
