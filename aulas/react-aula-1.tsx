import { useState } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export function App() {
  const [todos, setTodos] = useState<string[]>([])

  function handleCreateNewTodo() {
    setTodos([...todos, `New todo ${todos.length + 1}`])
  }

  return (
    <div>

      <Header onCreateNewTodo={handleCreateNewTodo} />

      <main>
        <ul>
          {todos.map(todo => (
            <li key={todo}>
              {todo}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
