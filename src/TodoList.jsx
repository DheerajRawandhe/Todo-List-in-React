import { useState } from "react"
import "./Todo.css"
import { v4 as uuidv4 } from 'uuid';

export default function ToduList() {

  let [todos , setTodos] = useState([{task : "Sample task", id : uuidv4() , isDone : false}]);
  let [newTodos , setNewTodo] = useState("");

  //add-Todo-Task ================>
  let addTask = () => {                   
    // console.log("added new task"); 
    setTodos((prevTodos) => {
      return [...prevTodos, {task : newTodos , id : uuidv4(), isDone: false}];
    });
    setNewTodo("");
  };

  let upadteTodoTask = (event) =>  {
    // console.log(event.target.value);
    setNewTodo(event.target.value)
  } 

// Delete todo-list ================>
  let deleteTodo = (id) => {            
     setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));
  }


 //Task  upper-Case-All ================>
  let upperCaseAll = () => {
  setTodos((prevTodos) => (
    prevTodos.map((prevTodos) => {
    return {
      ...prevTodos,
      task : prevTodos.task.toUpperCase(),
    }
    })
  ))
  };

    //Task  upper-Case-One ================>
  let upperCaseOne = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((prevTodos) => {
        if(prevTodos.id == id) {
          return {
            ...prevTodos,
            task : prevTodos.task.toUpperCase(),
          }
        } else {
          return prevTodos;
        }
      })
    ))
  };
 
    // Mark as One done ================>
  let MarkAsDone = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((prevTodos) => {
        if(prevTodos.id == id) {
          return {
            ...prevTodos,
           isDone : true,
          }
        } else {
          return prevTodos;
        }
      })
    ))
  }

  // Mark all done  ================>
  let MarkAllDone = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((prevTodos) => {
      return {
        ...prevTodos,
        isDone : true
      }
      })
    ))
  }



  return (
    <>
    <h1>Todo List In React</h1>
    <div className="todo">
    <input placeholder="Add a Task..." value={newTodos} onChange={upadteTodoTask} /> &nbsp; &nbsp; 
    <button onClick={addTask} style={{backgroundColor : "blue"}}>Add Task</button> <br />
    <ul>
      {
        todos.map((todo) => (
         <li key={todo.id}>
          <span style={todo.isDone ? {textDecoration : "line-through"} : {}}> {todo.task}</span> &nbsp; &nbsp;
          <button  onClick={() => upperCaseOne(todo.id)}  className="upper">Upper Case </button> &nbsp; &nbsp;
          <button  onClick={() => MarkAsDone(todo.id)}  style={{textDecoration: "line-through"}}>Mark as Done</button> &nbsp; &nbsp;
          <button onClick={() => deleteTodo(todo.id)} className="dlt" >Delete</button>  
          </li>
        
        ))
        
      }
      
    </ul> <br /><br />
      <button  onClick={MarkAllDone}>Mark All Done</button> &nbsp; &nbsp;
      <button  onClick={upperCaseAll}>Upper Case All</button> 
    </div>
    </>
  );
}
