import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | professional/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:professional/new');
    assert.ok(route);
  });
});
