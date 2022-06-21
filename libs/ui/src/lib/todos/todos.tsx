import { Todo } from '@my-org/data';

export interface TodosProps {
  todos: Todo[];
}

export function Todos({ todos }: TodosProps) {
  return (
    <ul>
      {todos.map((t, i) => (
        <li className="todo" key={i}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
