export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  console.log();
  return number;
};

export const getUniqueValues = () => {};
