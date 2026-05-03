import { CgArrowsExchangeAltV } from "react-icons/cg";

type Props = {
  isSortMode : boolean;
  onSortMode : React.MouseEventHandler<HTMLButtonElement>;
}

export default function Change({ isSortMode, onSortMode } : Props) {
  return (
    <button className={`flex items-center text-sm cursor-pointer ${isSortMode ? 'font-bold' : 'font-light'}`} onClick={onSortMode}>
      <CgArrowsExchangeAltV className="text-lg" />
      {isSortMode ? '정렬 완료' : '정렬'}
    </button>
  )
}
