export const openLibCoverUrlGen = (olid, size) => {
  const upperSize = size.toUpperCase();
  return `https://covers.openlibrary.org/b/olid/${olid}-${upperSize}.jpg`;
};

export const openLibBookUrlGen = (olid) => {
  return `https://openlibrary.org/book/${olid}`;
};
