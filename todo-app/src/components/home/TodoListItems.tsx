import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";

type Props = {
  children: string;
}

export default function TodoListItems({ children } : Props) {
  return (
    <li className="text-base py-3 px-5 border-b border-neutral-200 dark:border-neutral-500 even:bg-neutral-50 dark:even:bg-neutral-800">
      <div className="flex justify-between items-center">
        <p>{children}</p>

        <input />

        <div className="max-w-7.5 h-full text-lg">
          <button className="w-full h-full flex justify-end items-center cursor-pointer"><HiOutlinePencilAlt /></button>
          {/* <button className="w-full h-full flex justify-end items-center cursor-pointer"><FaCheck /></button> */}
        </div>
      </div>
    </li>
  )
}
