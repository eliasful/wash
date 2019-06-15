import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend({
  store: service(),
  geolocation: service(),
  lat: 0,
  lng: 0,
  zoom: 15,
  marks: A(),
  async didInsertElement() {
    let { coords } = await this.get('geolocation').getLocation();
    this.set('lat', coords.latitude);
    this.set('lng', coords.longitude);
    this.get('marks').pushObject(coords);
    const users = await this.get('store').findAll('user');
    users.forEach(user => {
      this.get('marks').pushObject({
        latitude: user.get('lat'),
        longitude: user.get('lng')
      });
    })
  },
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
