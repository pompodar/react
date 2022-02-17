import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  function handleAddTodo (e) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    });    
    todoNameRef.current.value = null;
  }
  return (
    <>
        <TodoList todos={ todos }/>
        {/* { todos } */}
        <input ref={ todoNameRef } type='text'></input>
        <button onClick={ handleAddTodo }>Add</button>
        <button>Clear</button>
        <div>0 left to do</div>
    </>
  );
}

export default App;
