const calculateAverage = (totalRating, numberOfRating) => {
  return Math.round(totalRating / numberOfRating * 10) / 10
}

export default calculateAverage;