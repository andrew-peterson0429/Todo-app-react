import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

// Uses local storage to fetch previous todos in the app. If already have local storage converts string in JSON object.
// If no value for todo in local storage the default value is empty array, 
const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        // Define initial state of main component
        this. state = {
            todos: todos,
        };
    }

    createTodo = (todo) => {
        // If todo is empty it wont be added to list. trim removes spaces around todo string
        if (todo.trim() === '') {
            alert('Todo cannot be empty');
            return;
        }
        // Push todo with its two attributes (content of todo and if it is completed)
        todos.push({todo, isComplete: false});
        // Reflects changes in UI by updating state
        this.setState({todos: todos });
        // Makes local storage array into string
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    toggleTodo = (todoId) => {
        const todoItem = todos[todoId];
        // If todo is completed is true, the new state should be false and vice versa
        todoItem.isCompleted = ! todoItem.isCompleted;
        // Updates the state
        this.setState({todos: todos });
        // Makes local storage array into string
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo = (todoId) => {
        // Deletes at starting point todoId and deletes one, then updates state with the todo array after id is deleted
        todos.splice(todoId, 1);
        this.setState({ todos: todos });
        // Makes local storage array into string
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // takes todo which is the new value inputted by user
    editTodo = (todoId, todo) => {
        const todoItem = todos[todoId];
        todoItem.todo = todo;
        this.setState({todos: todos });
        // Makes local storage array into string
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    
    render() {
        return ( 
        <div className='content'>
            <h1>Todo List</h1>

            <div className='todo-card'>
                <CreateTodo createTodo={ this.createTodo }/>
                <br/>
                <TodoList 
                todos={ this.state.todos } 
                deleteTodo= { this.deleteTodo } 
                editTodo={ this.editTodo }
                toggleTodo={ this.toggleTodo }
                />
            </div>
        </div> )
    }
};