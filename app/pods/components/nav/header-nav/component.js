import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import $ from "jquery";

export default Component.extend({
  session: service(),
  router: service(),
  store: service(),
  tagName: '',
  overlay: task(function * () {
    this.get('router').transitionTo('home');
    $('.overlay').addClass('overlay-on');
    yield timeout(5000);
    $('.overlay').removeClass('overlay-on');
  })
});
