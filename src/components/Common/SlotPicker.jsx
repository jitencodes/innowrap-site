import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SlotPicker = ({startDate, setStartDate}) => {
  const highlightDates = [new Date("2023-08-05"), new Date("2023-08-04")];
  function highlightDate(date) {
    const className = highlightDates.some(
      (highlightDate) => highlightDate.getTime() === date.getTime()
    )
      ? "highlight"
      : "";
    return className;
  }

  return (
    <DatePicker
      inline
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      highlightDates={highlightDates}
      minDate={new Date()}
      dayClassName={highlightDate}
      weekdayShort="true"
      dateFormat="EEE"
      calendarClassName="calendar"
    />
  );
};

export default SlotPicker;
