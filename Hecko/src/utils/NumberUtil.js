export function getRandomNumber(start, end, including) {
  if (including) return Math.floor(Math.random() * end) + start;
  else return Math.floor(Math.random() * (end - 1)) + start + 1;
}

export function isNumber(text) {
  return !isNaN(+text);
}
