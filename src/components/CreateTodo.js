import React, { Component } from 'react'

export default class CreateTodo extends Component {
    // Defines constructor
    constructor(props) {
        super(props);
        // Saves state user enters in input box
        this.state = {
            todo: ''
        }
    }

    handleChange = (event) => {
        // Sets state based on the data user enters into the input
        this.setState({ todo: event.target.value })
    };

    handleSubmit = (event) => {
        // Prevents refresh when pressing create button
        event.preventDefault();
        // Props is parent component that calls CreateTodo
        this.props.createTodo(this.state.todo);
        // Clears input box
        this.setState({ todo:'' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder='Enter Todo' 
                value={this.state.todo} 
                onChange={this.handleChange} 
                autoFocus>
                </input>
                <button className='createBtn' typeof='submit'>Create</button>
            </form>
        );
    }
};