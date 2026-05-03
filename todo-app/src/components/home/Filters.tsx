import InputRadio from "./InputRadio"

type Props = {
  value : string;
  onChange : (value: string) => void;
}

export default function Filters({ value, onChange } : Props) {
  return (
    <div className="flex items-center gap-4">
      <InputRadio
        id="all"
        name="filter"
        value="all"
        checked={value === 'all'}
        onChange={(e) => onChange(e.target.value)}
      >전체</InputRadio>

      <InputRadio
        id="complete"
        name="filter"
        value="completed"
        checked={value === 'completed'}
        onChange={(e) => onChange(e.target.value)}
      >완료</InputRadio>

      <InputRadio
        id="incomplete"
        name="filter"
        value="incomplete"
        checked={value === 'incomplete'}
        onChange={(e) => onChange(e.target.value)}
      >미완료</InputRadio>
    </div>
  )
}
