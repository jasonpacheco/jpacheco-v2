export default function getGreeting(): string {
  const time = new Date().getHours();
  if (time > 18 || time < 3) {
    return 'evening';
  }
  if (time < 12) {
    return 'morning';
  }
  return 'afternoon';
}
