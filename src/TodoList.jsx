import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (
    <ul className="list">
        {todos.length === 0 && "No To dos"}
        {/* everything in {} is run as a javascript code , this one returns an array*/}
        {todos.map(todo => {
        return (
            <TodoItem {...todo} key = {todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        )
        })}
      </ul>   
    )
}