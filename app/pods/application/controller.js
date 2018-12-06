import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';
import $ from 'jquery';

export default Controller.extend({
  overlay: task(function * () {
    $('.overlay').addClass('overlay-on');
    yield timeout(5000);
    $('.overlay').removeClass('overlay-on');
  })
});
