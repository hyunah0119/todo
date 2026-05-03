import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  isDelete : boolean;
  onToggleDelete : React.MouseEventHandler<HTMLButtonElement>;
  onDeleted : React.MouseEventHandler<HTMLButtonElement>;
}

export default function Delete({ isDelete, onToggleDelete, onDeleted } : Props) {
  return (
    <div>
      {isDelete ? 
        <button 
          className="flex items-center text-sm border border-black rounded-sm px-2 py-1 bg-black text-white dark:border-neutral-300 cursor-pointer"
          onClick={onDeleted}
        >
          삭제
        </button>
        :
        <button 
          className="flex items-center text-sm cursor-pointer"
          onClick={onToggleDelete}
        >
          <FaRegTrashCan className="mr-0.5" />
          삭제
        </button>
      }
    </div>
    
  )
}
