import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import LatLon from 'geodesy/latlon-ellipsoidal-vincenty.js';

export default Component.extend({
  geolocation: service(),
  distanceObserver: observer('service.user.{lat,lng}', async function() {
    const { coords } = await this.get('geolocation').getLocation();
    const p1 = new LatLon(coords.latitude, coords.longitude);
    const p2 = new LatLon(this.get('service.user.lat'), this.get('service.user.lng'));
    const meters = p1.distanceTo(p2);
    const km = meters / 1000;
    const distance = km < 1 ? meters : km;
    this.set('unit', km < 1 ? 'm':'km');
    this.set('distance', (distance).toFixed(2));
    this.set('service.distance', this.get('distance'));
  }).on('didInsertElement')
});
