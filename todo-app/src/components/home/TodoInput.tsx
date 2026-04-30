import { FaCheck } from "react-icons/fa6";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function TodoInput({ value, onChange, onClick, onKeyDown } : Props) {
  return (
    <div className="w-full h-auto flex items-center justify-between p-5">
      <input
        type="text"
        className="w-[85%] h-10 border border-neutral-700 dark:border-gray-300 dark:placeholder:text-gray-300 rounded-md pl-2"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <button 
        className="w-[12%] h-10 rounded-md bg-black text-white dark:border dark:border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <FaCheck />
      </button>
    </div>
  )
}
