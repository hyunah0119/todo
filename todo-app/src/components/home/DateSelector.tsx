import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import 'dayjs/locale/ko'

import "react-day-picker/style.css";

dayjs.locale('ko')

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = dayjs(selectedDate).format('MM월 DD일 (dd)');

  const handleYesterDay = () => {
    setSelectedDate(dayjs(selectedDate).subtract(1, 'day').toDate())
  }

  const handleNextDay = () => {
    setSelectedDate(dayjs(selectedDate).add(1, 'day').toDate())
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 relative">
        <button 
          className="cursor-pointer"
          onClick={handleYesterDay}
        >
          <MdArrowBackIosNew />
        </button>
        <p className="text-lg font-bold flex items-center gap-2">
          {formattedDate}
          <button className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}><FaRegCalendarAlt /></button>
        </p>
        <button 
          className="cursor-pointer"
          onClick={handleNextDay}
        >
          <MdArrowForwardIos />
        </button>

        {isOpen ? (
          <div className="absolute top-7.5 border border-neutral-300 rounded-md bg-white flex justify-center p-2">
            <DayPicker
              animate
              mode="single"
              navLayout="around"
              selected={selectedDate}
              onSelect={(date) => {
                if (!date) return;

                setSelectedDate(date);
                setIsOpen(false);
              }}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
