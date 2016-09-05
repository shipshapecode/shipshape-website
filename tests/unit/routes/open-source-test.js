import { moduleFor, test } from 'ember-qunit';

moduleFor('route:open-source', 'Unit | Route | open source', {
  needs: ['service:router-scroll']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});