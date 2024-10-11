"use client"
import { useState } from "react";


export default function Home() {
   const [todoItem, setTodoItem] = useState([]);
   const [inputField, setInputField] = useState('')
   const [todoCompItem, setTodoCompItem] = useState([])

   const addTodo = ()=>{
    const newTodo  =[...todoItem]
    newTodo.push(inputField)
    setTodoItem(newTodo)
    setInputField('');  
   }

   const removeTodo = (index)=>{
    const newTodo = [...todoItem]
    newTodo.splice(index,1)
    setTodoItem(newTodo)
   }

   const markCompleted = (singleItem)=>{
   const newMarkItems = [...todoCompItem]
   newMarkItems.push(singleItem)
   setTodoCompItem(newMarkItems)
   
   }
  return (
    <div className="max-w-md mx-auto mt-10 p-6  bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 ml-20">To-Do List</h1>
      <div className="flex mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Add a new task"
          value = {inputField}

          onChange={(e)=>{
            setInputField(e.target.value)
            
          }}
          
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTodo} >

          Add
          
        </button>
      </div>
      <ul>
        {todoItem.length> 0 ? 

        todoItem.map((singleItem,index)=>{

          const markAsComplete = todoCompItem.includes(singleItem);

          return(
            
            <li key={index}
           
          
            className={(markAsComplete ? "bg-green-600": "bg-white") + " flex justify-between items-center p-2 mb-2 border rounded-2xl "}
          >
            <span>{singleItem}</span>
            <div className="flex space-x-2">
              
              {
                markAsComplete ? null
                :  <>
                <button
                  className={`px-2 py-1 rounded text-white  bg-green-500 hover:bg-opacity-75`}
                  onClick={()=>markCompleted(singleItem)}>
                  Complete
                  
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={()=>removeTodo(index)}
                >
                  Remove
                </button>
                </>
              }
             
              
              </div>
          </li>
          )
        })
          : <p>no task today</p>
       
        }
        
        </ul>
    </div>
  );
}
  