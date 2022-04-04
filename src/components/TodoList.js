import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    // Accesses lists of todos from parent component and maps to convert each todo and its index to this component
    render() {
    return (
      <table>
          <thead>
          <tr>
              <th>Todo</th>
              <th>Change</th>
          </tr>
          </thead>
          <tbody>
              {this.props.todos.map((todo, index) => (
              <TodoItem 
              key={index} 
              todoItem={todo} 
              id={index}
              deleteTodo= {this.props.deleteTodo}
              editTodo={this.props.editTodo}
              toggleTodo={this.props.toggleTodo} 
              />
              ))}
          </tbody>
      </table>
    )
  }
}
