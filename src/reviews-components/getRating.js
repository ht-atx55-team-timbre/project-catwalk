const getRating = (ratings) => {
  let totalRating = 0;
  let numberOfRating = 0;
  for (const key in ratings) {
    totalRating += key * Number(ratings[key]);
    numberOfRating += Number(ratings[key]);
  }
  return [totalRating, numberOfRating];
}

export default getRating;