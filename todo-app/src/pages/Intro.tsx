import dayjs from 'dayjs';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export default function Intro({ value, onChange, onClick } : Props) {
  const today = dayjs().format('YYYY.MM.DD');

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-20">
      <div className="text-center">
        <span className='text-sm mb-4 block'>{today}</span>
        <h3 className="text-3xl font-bold tracking-wide">TODAY.</h3>
        <p className="text-sm text-neutral-500">할 일과 오늘의 기분을 함께 기록하세요</p>
      </div>

      <div className="w-[60%] flex flex-col gap-4">
        <div className="h-10">
          <input 
            type="text"
            className="w-full h-full border border-gray-500 rounded-sm pl-1 text-base"
            placeholder="ID를 입력해 주세요."
            value={value}
            onChange={onChange}
          />
        </div>
  
        <button
          className="w-full h-10 rounded-sm border
          border-black bg-white text-black
          hover:bg-black hover:text-white
          dark:border-white
          dark:bg-black
          dark:text-white
          dark:hover:bg-white
          dark:hover:text-black
          transition-colors duration-200 ease-in-out cursor-pointer"
          onClick={onClick}
        >
          시작하기
        </button>
      </div>
    </div>
  )
}
