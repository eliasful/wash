import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  geolocation: service(),
  lat: 0,
  lng: 0,
  zoom: 15,
  marks: [],
  async didInsertElement() {
    let { coords } = await this.get('geolocation').getLocation();
    this.set('lat', coords.latitude);
    this.set('lng', coords.longitude);
    this.get('marks').pushObject(coords);
  },
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
