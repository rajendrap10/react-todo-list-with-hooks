import React from 'react';

const ToDoList = ({todos, markComplete}) => {

    return (
        <div>
            <h1>Todo List</h1>
    
            <div className="todo-footer">
                <strong><span className="count-todos"></span></strong> Items Left
            </div>
            

        <ul id="sortable" className="list-unstyled">

            {todos.map(todo => (

            <li className="ui-state-default" key={todo.id}>
                <div className="checkbox">
                    <label>
                        <input 
                        type="checkbox" 
                        onChange={(e) => { markComplete(todo.id) }} />
                        {todo.todoString}
                    </label>
                </div>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default ToDoList;