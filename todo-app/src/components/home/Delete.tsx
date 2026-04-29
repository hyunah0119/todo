import { FaRegTrashCan } from "react-icons/fa6";

export default function Delete() {
  return (
    <button className="flex items-center text-sm cursor-pointer">
      <FaRegTrashCan className="mr-0.5" />
      삭제
    </button>
  )
}
