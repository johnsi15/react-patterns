import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }])
      setInput('')
    }
  }

  const toggleTodo = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder='Nueva tarea' />
      <button onClick={addTodo}>Agregar</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>Marcar como {todo.done ? 'pendiente' : 'hecha'}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { TodoList }
