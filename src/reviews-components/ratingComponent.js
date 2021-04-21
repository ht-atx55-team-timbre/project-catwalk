import getRatings from './getRatings';
import getRating from './getRating';

const ratingComponent = (product_id) => {
  return getRatings(product_id)
    .then(ratings => {
      return getRating(ratings)
    })
    .catch((err) => {
      console.log(err, 'error getting reviews metadate for the product id');
    });
}

export default ratingComponent;