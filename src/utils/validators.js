export function isEmpty(string) {
  return string.trim().length < 1;
}

export function isEmail(string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(string);
}
