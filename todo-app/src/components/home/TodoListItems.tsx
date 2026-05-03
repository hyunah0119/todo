import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import type { DraggableProvidedDragHandleProps } from '@hello-pangea/dnd';

type Props = {
  children: string;
  isEditing : boolean;
  editText : string;
  editingId : number | null;
  completed : boolean;
  isDelete : boolean;
  selectedIds : boolean;
  isSortMode: boolean;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  onEditing : React.MouseEventHandler<HTMLButtonElement>;
  onEditText : React.MouseEventHandler<HTMLButtonElement>;
  onChange : React.ChangeEventHandler<HTMLInputElement>;
  onComplete : React.MouseEventHandler<HTMLDivElement>;
  onChecked : () => void;
}

export default function TodoListItems({ children, isEditing, editText, completed, isDelete, selectedIds, isSortMode, dragHandleProps, onEditing, onEditText, onChange, onComplete, onChecked } : Props) {
  return (
    <li className="text-base py-3 px-5 border-b border-neutral-200 dark:border-neutral-500 even:bg-neutral-50 dark:even:bg-neutral-800">
      <div 
        className="w-full flex items-center gap-4 cursor-pointer"
        onClick={onComplete}
      >
        {isDelete &&
          <input 
            type="checkbox"
            checked={selectedIds}
            onChange={onChecked}
            onClick={(e) => e.stopPropagation()}
          />
        }

        {isSortMode && (
          <button
            type="button"
            {...dragHandleProps}
          >
            <RxHamburgerMenu />
          </button>
        )}

        <div className="w-full flex justify-between items-center">
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
      </div>
    </li>
  )
}
