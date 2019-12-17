export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(campsites) {
    const campsitesObj = {};
    campsites.forEach(campsite => campsitesObj[campsite.id] = campsite);

    campsites
      .filter(campsite => !this.markers[campsite.id])
      .forEach(newCampsite => this.createMarkerFromCampsite(newCampsite, this.handleClick))

    Object.keys(this.markers)
      .filter(campsiteId => !campsitesObj[campsiteId])
      .forEach((campsiteId) => this.removeMarker(this.markers[campsiteId]))
  }

  createMarkerFromCampsite(campsite) {
    const marker = new google.maps.Marker({
      position: { lat: campsite.latitude, lng: campsite.longitude},
      map: this.map,
      campsiteId: campsite.id
    });

    // marker.addListener('click', () => this.handleClick(campsite));
    this.markers[marker.campsiteId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.campsiteId].setMap(null);
    delete this.markers[marker.campsiteId];
  }
}

// {
// northEast: { lat: 45, lng: -71 },
// southWest: { lat: 42, lng: -73 }
// }