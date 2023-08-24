import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [context, setContext] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if(context.trim() !== '') {
        setTodos([...todos, context]);
        setContext('');    
    }
  }

  const saveTodo = () => {
      const newTodos = [...todos];
      newTodos[editIndex] = editText;
      setTodos(newTodos);
      setEditIndex(-1);
      setEditText('');
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i != index );
    setTodos(newTodos); 
  }

  const editTodo = (index) => {
      setEditIndex(index);
      setEditText(todos[index]);
    }

  return (
    <div>
      <h1>To Do App</h1>
      <div className='todo-input'>
        <input type='text' value={context} onChange={(e) => setContext(e.target.value)} placeholder='Add your idea' />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
        {
          todos.map((todo, index) => {
            if (editIndex === index) {
              return <li>
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button id='editbtn' onClick={saveTodo}>Save</button>
              </li>
            } else {
            return <li>
              {todo}
              <div className="btns">
              <button onClick={() => removeTodo(index)}>Delete</button>
              <button id='editbtn' onClick={() => editTodo(index)} >Edit</button>
              </div>
              </li>
            }
          })
        }
      </ul>
    </div>
  )
}

export default App
