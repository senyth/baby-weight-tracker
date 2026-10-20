const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.4375;

export const ageInMonths = (dateOfBirth: string, date: string) =>
  (new Date(date).getTime() - new Date(dateOfBirth).getTime()) / MS_PER_MONTH;

export function formatAge(months: number) {
  const whole = Math.floor(months);
  if (whole < 12) return `${whole} mo`;
  const years = Math.floor(whole / 12);
  const rest = whole % 12;
  return rest === 0 ? `${years} yr` : `${years} yr ${rest} mo`;
}