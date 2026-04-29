import Filters from "./Filters"
import Change from "./Change"
import Delete from "./Delete"

export default function TodoFilter() {
  return (
    <div className="border-b border-neutral-700 dark:border-gray-300 px-5 pt-1 pb-3.75 flex justify-between items-center">
      <Filters />

      <div className="flex items-center gap-4">
        <Change />
        |
        <Delete />
      </div>
    </div>
  )
}
