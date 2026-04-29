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
  const today = dayjs().format('MM월 DD일 (dd)');
  const [selected, setSelected] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer"><MdArrowBackIosNew /></button>
        <p className="text-lg font-bold flex items-center gap-2">
          {today}
          <button className="cursor-pointer"><FaRegCalendarAlt /></button>
        </p>
        <button className="cursor-pointer"><MdArrowForwardIos /></button>
      </div>

      {isOpen ? (
        <DayPicker
          animate
          mode="single"
          navLayout="around"
        />
      ) : (
        ''
      )}
    </>
  )
}
