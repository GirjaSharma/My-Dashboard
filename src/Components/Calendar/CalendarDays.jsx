export const CalendarDays = ({selectedDay, setSelectedDay, visibleMonth, setVisibleMonth}) => {
  const calendarDays = [];

  const firstDayOfMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  );

  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const daysToRollBack = weekdayOfFirstDay === 0 ? 7 : weekdayOfFirstDay;

  const firstVisibleDay = new Date(firstDayOfMonth);
  firstVisibleDay.setDate(firstVisibleDay.getDate() - daysToRollBack);

  for (let index = 0; index < 42; index++) {
    const date = new Date(firstVisibleDay);
    date.setDate(firstVisibleDay.getDate() + index);

    calendarDays.push({
      currentMonth: date.getMonth() === visibleMonth.getMonth(),
      date,
      month: date.getMonth(),
      number: date.getDate(),
      selected: date.toDateString() === selectedDay.toDateString(),
      year: date.getFullYear(),
    });
  }
return (
<div className="grid grid-cols-7 gap-3">
    {calendarDays.map((day) => {
        const today = new Date();
      const isToday = day.date.toDateString() === today.toDateString() &&
      today.getMonth() === visibleMonth.getMonth() && 
      today.getFullYear() === visibleMonth.getFullYear();
        return(
 <button
        key={day.date.toISOString()}
        type="button"
        onClick={() => {
          setSelectedDay(day.date);
          setVisibleMonth(new Date(day.date.getFullYear(), day.date.getMonth(), 1));
        }}
        className={
          day.currentMonth
            ? 'text-[12px]'
            : 'text-gray-400 text-[12px]'
        }
      >
    <span className="flex flex-col items-center justify-center">
    <span
      className={
        day.selected
          ? 'flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft'
          : 'flex h-5 w-5 items-center justify-center'
      }
    >
      {day.number}
    </span>

    <span
      className={
        isToday && !day.selected
          ? 'h-1 w-1 rounded-full bg-primary'
          : 'h-1 w-1'
      }
    />
  </span>
      </button>
        )
     
})}
  </div>
)
}
