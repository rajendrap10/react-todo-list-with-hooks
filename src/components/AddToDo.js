import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToDo = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if(todoString === '') {
            return toast("Please input todo first !", { type: "error" });
        }

        const todo = {
            todoString,
            id : uuidv4(),
            isCompleted : false
        }

        addTodos(todo);

        setTodoString("")
    }
   
    
        return(
            <div>
                <ToastContainer position="bottom-center" />
                <h1>Todos</h1>
                <form  onSubmit={handleSubmit} >
                    <input 
                    type="text" 
                    name="todo"
                    className="form-control add-todo" 
                    placeholder="Add todo"
                    value={todoString}
                    onChange={e => (setTodoString(e.target.value))}
                    />
                    <br />
                    <input type="submit" className="btn btn-success" value="Submit" />
                    <hr />
                </form>
            </div>
        )
    }

export default AddToDo;