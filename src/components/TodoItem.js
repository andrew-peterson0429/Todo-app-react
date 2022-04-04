import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    // Takes previous value of the todo to edit
    this.state = {
      todo: this.props.todoItem.todo,
      isBeingEdited: false,
    };
  };
  
  // Updates isBeingEdited state based on users input to determine which table to render.
  setEditingState = (isBeingEdited) => {
    this.setState({ isBeingEdited:isBeingEdited });
  };

  // Passes id of current todo to the parent component
  toggleTodo = () => {
    this.props.toggleTodo(this.props.id);
  };

  // Passes to parent to define and delete the index of todo in the todo array in main
  deleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  };

  // sets state of user inputted value
  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  // Prevents the page from refreshing once form is submitted and changes state from being edited.
  handleSubmit = (event) => {
    event.preventDefault();
    // Takes id from TodoList in the main component
    this.props.editTodo(this.props.id, this.state.todo);
    this.setState({ isBeingEdited: false });
  };

  render() {
    return (
      <tr>
        {this.state.isBeingEdited ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input value={this.state.todo}
                onChange={this.handleChange}
                autoFocus />
              </form>
            </td>
            <td>
              <button className='saveBtn' onClick={ this.handleSubmit } type='submit'>Save</button>
              <button className='cancelBtn' onClick={ () => this.setEditingState(false) } type='button'>Cancel</button>
            </td>
          </>
        ) : (
          <>
            <td className='todo' onClick={this.toggleTodo}>
              <input type='checkbox' readOnly checked={this.props.todoItem.isCompleted}></input>
              <span className={
                this.props.todoItem.isCompleted
                ? 'completed'
                : 'notCompleted'
                }
              >
                {this.props.todoItem.todo}
              </span>
            </td>
            <td>
              <button className='editBtn' onClick={ () => this.setEditingState(true) }>Edit</button>
              <button className='deleteBtn' onClick={this.deleteTodo}>Delete</button>
            </td>
          </>
        )
        
      }
          
      </tr>
    )
  }
}
