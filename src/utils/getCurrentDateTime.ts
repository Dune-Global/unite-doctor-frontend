export const getCurrentDateTime = (): string => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month starts from 0
  const year = currentDate.getFullYear();

  let hours = currentDate.getHours();
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 using logical OR operator

  const formattedDateTime = `${day}/${month}/${year} | ${hours}:${minutes} ${ampm}`;

  return formattedDateTime;
};
