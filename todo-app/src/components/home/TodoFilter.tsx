import Filters from "./Filters"
import Change from "./Change"
import Delete from "./Delete"

type Props = {
  value : string;
  isDelete : boolean;
  isSortMode : boolean;
  onChange : (value: string) => void;
  onToggleDelete : React.MouseEventHandler<HTMLButtonElement>;
  onDeleted : React.MouseEventHandler<HTMLButtonElement>;
  onSortMode : React.MouseEventHandler<HTMLButtonElement>;
}

export default function TodoFilter({ value, isDelete, isSortMode, onChange, onToggleDelete, onDeleted, onSortMode } : Props) {
  return (
    <div className="border-b border-neutral-700 dark:border-gray-300 px-5 pt-1 pb-3.75 flex justify-between items-center">
      <Filters 
        value={value}
        onChange={onChange}
      />

      <div className="flex items-center gap-4">
        <Change onSortMode={onSortMode} isSortMode={isSortMode} />
        |
        <Delete 
          isDelete={isDelete}
          onToggleDelete={onToggleDelete}
          onDeleted={onDeleted}
        />
      </div>
    </div>
  )
}
