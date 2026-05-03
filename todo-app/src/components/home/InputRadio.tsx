type Props = {
  children : string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputRadio({ children, id, name, value, checked, onChange } : Props) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-1 text-sm cursor-pointer"
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      {children}
    </label>
  )
}
