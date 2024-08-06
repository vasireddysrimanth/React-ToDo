/*
import { useState } from 'react'
import './App.css'
function App() {
      let [todoInput, updateInput] = useState()

      let [todoList, updateTodos] = useState(
            [
                  {
                        id: 1,
                        task: 'Learn React'

                  },
                  {
                        id: 2,
                        task: 'Learn Angulr'

                  }
            ]
      )

      let nextId = 3

      function addNewTodo() {

            if (todoInput == "") {
                  alert("Add some task")
            }
            else {

                  let newTodos = [
                        ...todoList,
                        {
                              id: nextId++,
                              task: todoInput

                        }
                  ]
                  updateTodos(newTodos);
                  updateInput("")
            }

      }

      function deleteTodo(id) {
            let filteredTodos = todoList.filter(
                  (todo) => {
                        return todo.id != id

                  }
            )
            updateTodos(filteredTodos)



      }


      return (
            <div className="container mt-5 w-50">
                  <h3 className='text-center'>Todo App using React</h3>
                  <div className="input-group">
                        <input className="form-control" onChange={(e) => {
                              let task = e.target.value;
                              updateInput(task)

                        }} type='text' value={todoInput} />
                        <button onClick={() => {
                              addNewTodo()
                        }} className="btn btn-primary">Add</button>
                  </div>
                  <ul className="list-group mt-4">
                        {
                              todoList.map(
                                    (todo) => {
                                          return (
                                                <li key={todo.id} className="list-group-item">
                                                      <p>{todo.task}</p>
                                                      <button onClick={() => {
                                                            deleteTodo(todo.id)
                                                      }} className="btn"> ❌</button>
                                                </li>
                                          )
                                    }
                              )
                        }


                  </ul>
            </div>
      )




}

export default App

*/


import {useState} from 'react';
import "./App.css"


const App = () =>{
  let [todoInput,updateInput] = useState("example");
  let [todoItem ,updateTodos] = useState([
    {
      id:1,
      task:"learn react"
    },
    {
      id:2,
      task:"learn Node"
    },
  ])
let nextid = 2;
  const AddTodo = () =>{
    if(todoInput == ""){
      alert("enter Todo Name");
    }else{
      let newTodos = [
        ...todoItem,
        {
          id:nextid++,
          task:todoInput
        }
      ]
      updateTodos(newTodos);
      updateInput("")

    }
    
  }
  const deleteTodo = (id) =>{
    let filteredTodo = todoItem.filter(
      (todo) => {
        return todo.id != id

  }
    )
    updateTodos(filteredTodo);
  }


  return(
    <div className='container mt-4'>
    <h3 className='text-center'>React todo List </h3>
      <div className='input-group'>
      <input type='text' className='form-control w-30' value={todoInput} onChange={(e)=>{
        let userEnteredTodo = e.target.value;
        updateInput(userEnteredTodo);
      }}/>
      <button className='btn btn-outline-primary' onClick={AddTodo}>Add</button>
      </div>
      <div>
        <ul className='list-group mt-3'>
          {
            todoItem.map(
              (todo) =>{
                return(
                  <li className='list-group-item'>
            <h5>{todo.task}</h5>
            <button className='btn btn-outline' onClick={()=>{
              deleteTodo(todo.id)
            }}>❌</button>

          </li>
                )
              }
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default App;