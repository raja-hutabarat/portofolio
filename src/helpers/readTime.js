export const readTime = (text) => {
  const wordsPerMinute = 100; // Average case.
  let textLength = text.split(" ").length;
  let result = Math.ceil(textLength / wordsPerMinute);
  return result;
};
