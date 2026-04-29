import InputRadio from "./InputRadio"

export default function Filters() {
  return (
    <div className="flex items-center gap-4">
      <InputRadio
        id="all"
        name="all"
      >전체</InputRadio>

      <InputRadio
        id="complete"
        name="complete"
      >완료</InputRadio>

      <InputRadio
        id="incomplete"
        name="incomplete"
      >미완료</InputRadio>
    </div>
  )
}
