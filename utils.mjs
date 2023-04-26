function changeText(str, start, end, content) {
  const newString = str.slice(0, end) + content + str.slice(end);
  return newString;
}

export { changeText };
