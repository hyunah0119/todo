import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"
import TodoProgressBar from "./TodoProgressBar"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"

export default function TodoContents() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0">
        <TodoHeader />
        <TodoInput />
        <TodoProgressBar />
        <TodoFilter />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <TodoList />
      </div>
    </div>
  )
}
