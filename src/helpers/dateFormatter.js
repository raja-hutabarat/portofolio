export const dateFormatter = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const result = `${month} ${date.getDate("long")}, ${date.getFullYear()}`;
  return result;
};
