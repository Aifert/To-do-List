import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"
import { useEffect, useState } from "react"

export default function App(){
  //hook (add or modify behavior in a specific part of a program's execution without modifying the underlying code itself
  //inside react, takes a default value
  //newItem holds our current value, setNewItem is a function for updating our value
  //you cannot change the value of a state
const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if(localValue == null) return []

  return JSON.parse(localValue)
})
//everytime something changes in our array, in this case [todos] element
//we will run this effect which saves the array in our local storage
useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])

function addTodo(title){
  setTodos((currentTodos) => {
    //using currentTodos array and filling it with id, title, completed status in the back
    //... is a spreading operator, it is used to create a new array by spreading
    //the elements of an existing array, so you have a new array and add item behind, to array
    return [...currentTodos, {id : crypto.randomUUID(), title, completed : false}]
  })
}

function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo =>{
      if(todo.id === id){
        return {...todo, completed}
      }

      return todo
    })
  })
}

function deleteTodo(id){
  setTodos(currentTodos =>{
    //if the todo.id !== id provided, the I will keep it and filter the ones I do not want to keep.
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  //form is a html element, when paired with javascript in react, it becomes jsx
  //cannot call it class because jsx is a keyword, so call it className
  return (
    //this is a fragment, very similar function to <div> but without a tagline
    //can use <div> anyway
    <>
    {/* using props in react */}
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos= {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
} 