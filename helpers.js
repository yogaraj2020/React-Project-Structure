export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  } else {
    return str;
  }
};
