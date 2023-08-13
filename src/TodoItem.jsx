export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
        // the key is used to identify which array element you are looking to change
        <li>
        <label>
          <input type="checkbox" checked = {completed} onChange={e => toggleTodo(id, e.target.checked)}/>
          {title}
        </label>
        <button onClick={() => deleteTodo(id)}className="btn btn-danger">Delete</button>
      </li>
      )
}