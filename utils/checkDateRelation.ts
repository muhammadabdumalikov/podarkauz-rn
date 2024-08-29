export function checkDateRelation(dateString: string) {
  const givenDate = new Date(dateString);
  const today = new Date();

  // Reset time to midnight for accurate day comparison
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const diffTime = today.getTime() - givenDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Сегодня";
  } else if (diffDays === 1) {
    return "Вчера";
  } else {
    // Format the date in Russian
    const day = givenDate.getDate();
    const month = givenDate.toLocaleString('ru-RU', { month: 'long' });
    const year = givenDate.getFullYear();
    return `${day} ${month} ${year}`;
  }
}