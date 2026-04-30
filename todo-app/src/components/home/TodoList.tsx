import TodoListItems from "./TodoListItems"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type Props = {
  todos : Todo[];
}

export default function TodoList({ todos } : Props) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItems key={item.id}>
          {item.text}
        </TodoListItems>
      ))}
    </ul>
  )
}
