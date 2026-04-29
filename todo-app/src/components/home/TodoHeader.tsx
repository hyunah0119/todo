import DateSelector from "./DateSelector"
import MoodSelector from "./MoodSelector"

export default function TodoHeader() {
  return (
    <div className="pt-7.5 px-5">
      <DateSelector />
      <MoodSelector />
    </div>
  )
}
