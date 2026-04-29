import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

type Props = {
  onThemeToggle : () => void;
  isDark : boolean;
}

export default function Header({ onThemeToggle, isDark } : Props) {
  return (
    <div className="w-full h-12.5 border-b border-gray-300 flex justify-between items-center">
      <button
        className="h-full px-4 text-xl cursor-pointer"
        onClick={onThemeToggle}
      >
        {!isDark ? <MdDarkMode /> : <MdLightMode />}
      </button>

      <div className="px-4 text-sm font-medium flex items-center gap-x-1">
        <FaRegUser />
        <span>userName</span>
      </div>
    </div>
  )
}
