import React from "react"

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Task: {props.text}</p>
      <hr />
    </div>
  )
}
export default ToDoItem

/*
Oplossing:
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
             ....extra <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem */