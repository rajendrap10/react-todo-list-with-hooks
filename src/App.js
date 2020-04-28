import React, {useState, useEffect} from 'react';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import ToDoDone from './components/ToDoDone';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    const localCompletedTodos = localStorage.getItem("completedTodos")
    if(localTodos) {
      setTodos(JSON.parse(localTodos));
    }

    if(localCompletedTodos) {
      setCompletedTodos(JSON.parse(localCompletedTodos));
    }

  }, []);

  const addTodos = async todo => {
      setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  const markComplete = async id => {
    
    const item = todos.find(item => item.id === id);
    setCompletedTodos([...completedTodos, item]);
    
    setTodos(todos.filter(todo => todo.id !== id)); 
     
  }

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-6">
              <div className="todolist not-done">
                      <AddToDo addTodos={addTodos} />
                      <ToDoList todos={todos} markComplete={markComplete}  />
              </div>
          </div>

          <div className="col-md-6">
              <ToDoDone completedTodos={completedTodos} />
          </div>
      </div>
</div>
  );
}

export default App;
