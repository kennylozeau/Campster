export const fetchCampsites = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/campsites',
    data: { bounds: data },
    error: (err) => console.log(err)
  });
};

export const fetchCampsite = (campsiteId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/campsites/${campsiteId}`,
    error: (err) => console.log(err)
  });
};