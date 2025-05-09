import React from 'react'


const TodoComponent = ({todo}) => {
  return (
    <div className="todo">
          <div className="content">
            <div>
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
            </div>
            <div className='task-buttons'>
            <button className='complete'>Completar tarefa</button>
          <button className='remove'>x</button>
          </div>
          </div>
        </div>
  )
}

export default TodoComponent;
