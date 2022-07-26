export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  console.log();

  return newNumber;
};

export const getUniqueValues = () => {};
