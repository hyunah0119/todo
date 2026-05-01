import { useState } from "react"
import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"
import TodoProgressBar from "./TodoProgressBar"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoContents() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [addTodo, setAddTodo] = useState('');

  const handleAddTodoText = (e : React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value)
  }

  const handleAddTodoTextSave = () => {
    setTodo([
      ...todo, 
      {
        id: Date.now(),
        text: addTodo,
        completed: false
      }
    ]);
    setAddTodo('')
  }

  const handleAddTodoTextEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      setTodo([
        ...todo, 
        {
          id: Date.now(),
          text: addTodo,
          completed: false
        }
      ]);
      setAddTodo('')
    }
  }

  {/* 수정 */}
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // 수정 버튼
  const handleIsEditing = (id:number, text:string) => {
    setEditingId(id);
    setEditText(text);
  }

  // 텍스트 수정
  const handleOnChangeText = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value)
  }

  // 수정 완료 버튼
  const handleEditTextBtn = () => {
    setTodo(
      todo.map((item) =>
        item.id === editingId
          ? { ...item, text: editText }
          : item
      )
    );

    setEditingId(null);
    setEditText('');
  }

  {/* 완료 */}
  const handleCompletedBtn = (id:number) => {
    setTodo(
      todo.map((item) => 
        item.id === id
          ? {...item, completed: !item.completed}
          : item
      )
    )
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0">
        <TodoHeader />
        <TodoInput 
          value={addTodo}
          onChange={handleAddTodoText}
          onClick={handleAddTodoTextSave}
          onKeyDown={handleAddTodoTextEnter}
        />
        <TodoProgressBar />
        <TodoFilter />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <TodoList 
          todos={todo}
          editText={editText}
          editingId={editingId}
          onEditing={handleIsEditing}
          onEditText={handleEditTextBtn}
          onChange={handleOnChangeText}
          onComplete={handleCompletedBtn}
        />
      </div>

      <TodoFooter />
    </div>
  )
}
