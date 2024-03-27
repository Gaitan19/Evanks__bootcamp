import 'datejs';

export const formatDate = (date) => {
  const newDate = Date.parse(date).toString('dd MMM, yyyy');
  return newDate;
};
