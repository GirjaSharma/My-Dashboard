export const CalendarDays = ({selectedDay, setSelectedDay, visibleDay, setVisibleDay}) => {
  const calendarDays = [];

  const firstDayOfMonth = new Date(
    visibleDay.getFullYear(),
    visibleDay.getMonth(),
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
      currentMonth: date.getMonth() === visibleDay.getMonth(),
      date,
      month: date.getMonth(),
      number: date.getDate(),
      selected: date.toDateString() === selectedDay.toDateString(),
      year: date.getFullYear(),
    });
  }

return (
<div className="grid grid-cols-7 gap-4">
    {calendarDays.map((day) => (
      <button
        key={day.date.toISOString()}
        type="button"
        onClick={() => {
          setSelectedDay(day.date);
          setVisibleDay(day.date);
        }}
        className={
          day.currentMonth
            ? 'text-[12px]'
            : 'text-gray-400 text-[12px]'
        }
      >
        <span
          className={
            day.selected
              ? 'flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft'
              : ''
          }
        >
          {day.number}
        </span>
      </button>
    ))}
  </div>
)
}
