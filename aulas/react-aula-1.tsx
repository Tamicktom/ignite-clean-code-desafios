import { useState } from "react";

import { Footer } from "./footer";

export function App() {
  const [todos, setTodos] = useState<string[]>([])

  return (
    <div>
      <header>
        <h1>My new innovate to-do list!</h1>

        <button onClick={() => { }}>
          Add new todo
        </button>
      </header>

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
