import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clicking Logout', async function (assert) {
    await visit('/teams');

    assert.equal(currentURL(), '/teams', 'Should be on the /teams page');

    await click('.team-sidebar__logout-button');

    assert.equal(
      currentURL(),
      '/login',
      'Should be redirected to the /login page after logout'
    );
  });
});
