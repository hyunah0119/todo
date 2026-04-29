type Props = {
  children : string;
  id: string;
  name: string;
}

export default function InputRadio({ children, id, name } : Props) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-1 text-sm cursor-pointer"
    >
      <input
      type="radio"
      id={id}
      name={name}
      />
      {children}
    </label>
  )
}
