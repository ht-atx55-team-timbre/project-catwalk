const getRating = (ratings) => {
  let totalRating = 0;
  let numberOfRating = 0;

  if (Object.keys(ratings).length === 0) return [0, 0]

  for (const key in ratings) {
    totalRating += key * Number(ratings[key]);
    numberOfRating += Number(ratings[key]);
  }
  return [Math.round(totalRating / numberOfRating * 10) / 10, numberOfRating];
}

export default getRating;