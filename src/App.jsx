import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoComponent from './components/todocomponent';
import './App.css';



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
const addTodoComponent = (text, category) => {
  const newTodos =[
    ...todos, 
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];
  setTodos(newTodos);
};
  return (
    <div className="app">
      <div className="header" >
        <img className="hello-kitty-balao" src="./pngegg (1).png" alt="" />
        <h1>Planner Hello Kitty</h1>
        <img className="icone-hello-kitty" src="./pngegg.png" alt="" />
        
      </div>
    <div className= "todo-list">
      {todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo}/>
      )) 
      }
    </div>
      <TodoForm addTodoComponent={addTodoComponent}/>
    </div>
    );
}

export default App
