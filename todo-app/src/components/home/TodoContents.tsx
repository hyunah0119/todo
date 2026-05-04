import { useState, useEffect } from "react"
import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"
import TodoProgressBar from "./TodoProgressBar"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"

import type { DropResult } from '@hello-pangea/dnd';
import { supabase } from '../../lib/supabase';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoContents() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [addTodo, setAddTodo] = useState('');
  const userId = localStorage.getItem('userId');
  // const API_URL = 'https://todo-phi-ruddy.vercel.app/todos';

  // useEffect(() => {
  //   fetch(`${API_URL}?userId=${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => setTodo(data));
  // }, []);

  useEffect(() => {
    const getTodos = async () => {
      if (!userId) return;

      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('userId', userId);

      if (error) {
        console.error(error);
        return;
      }

      setTodo(data || []);
    };

    getTodos();
  }, [userId]);

  {/* 저장 */}
  const handleAddTodoText = (e : React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value)
  }

  // const handleAddTodoTextSave = async () => {
  //   if (!addTodo.trim()) return;

  //   const newTodo = {
  //     userId,
  //     text: addTodo,
  //     completed: false
  //   };

  //   const res = await fetch(API_URL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newTodo)
  //   });

  //   const data = await res.json();

  //   setTodo([...todo, data]);
  //   setAddTodo('');
  // };

  const handleAddTodoTextSave = async () => {
    if (!addTodo.trim()) return;

    const { data, error } = await supabase
      .from('todos')
      .insert({
        userId,
        text: addTodo,
        completed: false
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setTodo([...todo, data]);
    setAddTodo('');
  }

  const handleAddTodoTextEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      handleAddTodoTextSave();
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
  // const handleEditTextBtn = async () => {
  //   await fetch(`${API_URL}/${editingId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ text: editText })
  //   });

  //   setTodo(
  //     todo.map(item =>
  //       item.id === editingId
  //         ? { ...item, text: editText }
  //         : item
  //     )
  //   );

  //   setEditingId(null);
  //   setEditText('');
  // };

  const handleEditTextBtn = async () => {
    if (!editingId) return;

    const { error } = await supabase
      .from('todos')
      .update({ text: editText })
      .eq('id', editingId);

    if (error) {
      console.error(error);
      return;
    }

    setTodo(
      todo.map(item =>
        item.id === editingId ? { ...item, text: editText } : item
      )
    );

    setEditingId(null);
    setEditText('');
  };

  {/* 완료 */}
  // const handleCompletedBtn = async (id: number) => {
  //   const target = todo.find(item => item.id === id);

  //   if (!target) return;

  //   await fetch(`${API_URL}/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ completed: !target.completed })
  //   });

  //   setTodo(
  //     todo.map(item =>
  //       item.id === id
  //         ? { ...item, completed: !item.completed }
  //         : item
  //     )
  //   );
  // };

  const handleCompletedBtn = async (id: number) => {
    const target = todo.find(item => item.id === id);
    if (!target) return;

    const { error } = await supabase
      .from('todos')
      .update({ completed: !target.completed })
      .eq('id', id);

    if (error) {
      console.error(error);
      return;
    }

    setTodo(
      todo.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

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

  // const handleDeleteList = async () => {
  //   await Promise.all(
  //     selectedIds.map(id =>
  //       fetch(`${API_URL}/${id}`, {
  //         method: 'DELETE'
  //       })
  //     )
  //   );

  //   setTodo(todo.filter(item => !selectedIds.includes(item.id)));
  //   setSelectedIds([]);
  //   setIsDelete(false);
  // };

  const handleDeleteList = async () => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .in('id', selectedIds);

    if (error) {
      console.error(error);
      return;
    }

    setTodo(todo.filter(item => !selectedIds.includes(item.id)));
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
