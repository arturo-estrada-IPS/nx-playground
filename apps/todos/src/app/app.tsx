import { Todo } from '@my-org/data';
import { Todos } from '@my-org/ui';
import { useEffect, useState } from 'react';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const addTodo = () => {
    fetch('/api/todos', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };

  return (
    <div className="Todos">
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default App;
