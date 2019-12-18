export const createReview = review => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/reservations/${review.reservation_id}/reviews`,
    data: { review },
    error: (err) => console.log(err)
  });
};