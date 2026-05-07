import DateSelector from "./DateSelector"

type TodoHeaderProps = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TodoHeader({
  selectedDate,
  setSelectedDate,
  isOpen,
  setIsOpen,
}: TodoHeaderProps) {
  return (
    <div className="pt-7.5 px-5">
      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
