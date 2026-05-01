import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";

type Props = {
  children: string;
  isEditing : boolean;
  editText : string;
  editingId : number | null;
  completed : boolean;
  onEditing : React.MouseEventHandler<HTMLButtonElement>;
  onEditText : React.MouseEventHandler<HTMLButtonElement>;
  onChange : React.ChangeEventHandler<HTMLInputElement>;
  onComplete : React.MouseEventHandler<HTMLDivElement>;
}

export default function TodoListItems({ children, isEditing, editText, completed, onEditing, onEditText, onChange, onComplete } : Props) {
  return (
    <li className="text-base py-3 px-5 border-b border-neutral-200 dark:border-neutral-500 even:bg-neutral-50 dark:even:bg-neutral-800">
      <div 
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={onComplete}
      >
        {isEditing ?
          <>
            <input 
              type="text"
              className="w-[90%] border-b border-neutral-500 px-1"
              value={editText}
              onChange={onChange}
            />

            <div className="max-w-7.5 h-full text-lg">
              <button 
                className="w-full h-full flex justify-end items-center cursor-pointer"
                onClick={onEditText}
              >
                <FaCheck />
              </button>
            </div>
          </> :
          <>
            <p className={`${!completed ? '' : 'line-through text-gray-400'}`}>{children}</p>
        
            <div className="max-w-7.5 h-full text-lg">
              <button 
                className="w-full h-full flex justify-end items-center cursor-pointer"
                onClick={onEditing}
              >
                <HiOutlinePencilAlt />
              </button>
            </div>
          </>
        }
      </div>
    </li>
  )
}
