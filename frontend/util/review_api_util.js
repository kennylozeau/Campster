export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review },
    error: (err) => console.log(err)
  });
};