import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import type { DropResult } from '@hello-pangea/dnd';
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
  isDelete : boolean;
  selectedIds : number[];
  isSortMode : boolean;
  onEditing : (id:number, text:string) => void;
  onEditText : React.MouseEventHandler<HTMLButtonElement>;
  onChange : React.ChangeEventHandler<HTMLInputElement>;
  onComplete : (id: number) => void;
  onChecked : (id: number) => void;
  onDragEnd: (result: DropResult) => void;
}

export default function TodoList({ todos, editText, editingId, isDelete, selectedIds, isSortMode, onEditing, onEditText, onChange, onComplete, onChecked, onDragEnd } : Props) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(dragProvided) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    // {...dropProvided .dragHandleProps}
                  >
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
                      isDelete={isDelete}
                      onChecked={() => onChecked(item.id)}
                      selectedIds={selectedIds.includes(item.id)}
                      isSortMode={isSortMode}
                      dragHandleProps={dragProvided.dragHandleProps}
                    >
                      {item.text}
                    </TodoListItems>
                  </div>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
