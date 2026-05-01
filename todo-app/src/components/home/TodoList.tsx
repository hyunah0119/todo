import TodoListItems from "./TodoListItems"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type Props = {
  todos : Todo[];
  editText : string;
  editingId : number | null;
  onEditing : (id:number, text:string) => void;
  onEditText : React.MouseEventHandler<HTMLButtonElement>;
  onChange : React.ChangeEventHandler<HTMLInputElement>;
  onComplete : (id: number) => void;
}

export default function TodoList({ todos, editText, editingId, onEditing, onEditText, onChange, onComplete } : Props) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItems 
          key={item.id}
          isEditing={editingId === item.id}
          onEditing={() => onEditing(item.id, item.text)}
          editText={editText}
          editingId={editingId}
          completed={item.completed}
          onEditText={onEditText}
          onChange={onChange}
          onComplete={() => onComplete(item.id)}
        >
          {item.text}
        </TodoListItems>
      ))}
    </ul>
  )
}
