import { useState } from "react"

export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e){
        e.preventDefault()

        if(newItem === "") return
        onSubmit(newItem)
    
        setNewItem("")
      }

    return(
    <form onSubmit={handleSubmit} className = "new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/* e is an event, and everytime onChange is called, it will run setNewItem and put e.target.value 
        as a value inside setNewItem */}
        <input value={newItem} onChange={e=>(setNewItem(e.target.value))} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    )
}