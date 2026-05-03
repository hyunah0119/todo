type Props = {
  progress : number;
  completedCount : number;
  totalCount : number;
}

export default function TodoProgressBar({ progress } : Props) {
  return (
    <div className="w-full px-5 pb-5 flex justify-between items-center">
      <span className="block font-bold text-sm text-right mr-3">{progress}%</span>
      <div className="w-full h-2.5 border border-neutral-500 rounded-full flex items-center">
        <div 
          className="h-full rounded-4xl bg-neutral-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
