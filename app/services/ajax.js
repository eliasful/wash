import AjaxService from 'ember-ajax/services/ajax';
import environment from 'wash/config/environment';

export default AjaxService.extend({
  host: `${environment.urlServer}`,
  contentType: 'application/json; charset=utf-8'
});
