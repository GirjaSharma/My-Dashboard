export const CalendarDays = ({selectedDay}) => {
  const calendarDays = [];

  const firstDayOfMonth = new Date(
    selectedDay.getFullYear(),
    selectedDay.getMonth(),
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
      currentMonth: date.getMonth() === selectedDay.getMonth(),
      date,
      month: date.getMonth(),
      number: date.getDate(),
      selected: date.toDateString() === selectedDay.toDateString(),
      year: date.getFullYear(),
    });
  }

console.log(calendarDays)

return (
    <div className="grid grid-cols-7 gap-4">
        {calendarDays.map((day) => (
            <p className={day.currentMonth === false ? `text-gray-400 text-[12px]` : "text-[12px]"}>
                {day.number}</p>
        ))}
    </div>
)
}
