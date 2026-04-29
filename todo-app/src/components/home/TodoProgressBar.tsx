export default function TodoProgressBar() {
  return (
    <div className="w-full px-5 pb-5 flex justify-between items-center">
      <span className="block font-bold text-sm text-right mr-3">10%</span>
      <div className="w-full h-2.5 border border-neutral-500 rounded-full flex items-center">
        <div className="w-[10%] h-full rounded-4xl bg-neutral-500"></div>
      </div>
    </div>
  )
}
