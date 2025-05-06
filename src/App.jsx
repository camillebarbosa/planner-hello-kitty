import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted:false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted:false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted:true,
    },

  ]);
  return (
    <div className="app">
      <div className="header" >
        <img id="hello-kitty-balao"src="./src/assets/pngegg (1).png" alt="" />
        <h1>Planner Hello Kitty</h1>
        <img id="icone-hello-kitty"src="./src/assets/pngegg.png" alt="" />
        
      </div>
    <div className= "todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <button>Completar tarefa</button>
          <button>x</button>
        </div>
      )) 
      }
    </div>
    </div>
    );
}

export default App
