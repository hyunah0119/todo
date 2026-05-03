import { useState } from "react"
import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"
import TodoProgressBar from "./TodoProgressBar"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"

import type { DropResult } from '@hello-pangea/dnd';

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

  {/* 필터 */}
  const [selectRadioType, setSelectRadioType] = useState<string>('all');

  const filteredTodos = todo.filter(item => {
    if (selectRadioType === 'completed') return item.completed;
    if (selectRadioType === 'incomplete') return !item.completed;
    return true;
  });

  {/* 삭제 */}
  const [isDelete, setIsDelete] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleIsDelete = () => {
    setIsDelete(!isDelete)
  }

  const handleSelectDeleteId = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleDeleteList = () => {
    setTodo(todo.filter((item) => !selectedIds.includes(item.id)));
    setSelectedIds([]);
    setIsDelete(false);
  };

  {/* 완료율 */}
  const totalCount = todo.length;
  const completedCount = todo.filter(item => item.completed).length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  {/* DnD */}
  const [isSortMode, setIsSortMode] = useState(false);

  const handleSortMode = () => {
    setIsSortMode(prev => !prev)
  }

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // 리스트 밖에 떨어뜨리면 아무것도 안 함
    if (!destination) return;

    // 같은 위치면 아무것도 안 함
    if (source.index === destination.index) return;

    const copiedTodos = [...todo];

    const [movedTodo] = copiedTodos.splice(source.index, 1);
    copiedTodos.splice(destination.index, 0, movedTodo);

    setTodo(copiedTodos);
  };

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
        <TodoProgressBar 
          progress={progress}
          completedCount={completedCount}
          totalCount={totalCount}
        />
        <TodoFilter 
          value={selectRadioType}
          isDelete={isDelete}
          isSortMode={isSortMode}
          onChange={setSelectRadioType}
          onToggleDelete={handleIsDelete}
          onDeleted={handleDeleteList}
          onSortMode={handleSortMode}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <TodoList 
          todos={filteredTodos}
          editText={editText}
          editingId={editingId}
          isDelete={isDelete}
          selectedIds={selectedIds}
          isSortMode={isSortMode}
          onEditing={handleIsEditing}
          onEditText={handleEditTextBtn}
          onChange={handleOnChangeText}
          onComplete={handleCompletedBtn}
          onChecked={handleSelectDeleteId}
          onDragEnd={handleDragEnd}
        />
      </div>
    </div>
  )
}
