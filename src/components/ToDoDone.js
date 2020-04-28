import React from 'react';

const ToDoDone = ({completedTodos}) => {
    return(
        <div className="todolist">
                  <h1>Already Done</h1>
                  <ul id="done-items" className="list-unstyled">
                    {completedTodos.map(value => (
                        <li key={value.id}>{value.todoString} <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>
                    )
                        
                    )}
                  </ul>
        </div>
    )
}

export default ToDoDone;