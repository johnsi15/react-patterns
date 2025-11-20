import { createContext, useContext, useState } from 'react'

const TodoContext = createContext()

function TodoList({ children }) {
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

  return <TodoContext.Provider value={{ todos, input, setInput, addTodo, toggleTodo }}>{children}</TodoContext.Provider>
}

function Title() {
  return <h1>Lista de Tareas</h1>
}

function Form() {
  const { input, setInput, addTodo } = useContext(TodoContext)
  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder='Nueva tarea' />
      <button onClick={addTodo}>Agregar</button>
    </>
  )
}

function List() {
  const { todos } = useContext(TodoContext)
  return (
    <ul>
      {todos.map(todo => (
        <TodoList.Item key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

function Item({ todo }) {
  const { toggleTodo } = useContext(TodoContext)
  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Marcar como {todo.done ? 'pendiente' : 'hecha'}</button>
    </li>
  )
}

// Asigna subcomponentes
TodoList.Title = Title
TodoList.Form = Form
TodoList.List = List
TodoList.Item = Item

export { TodoList }
