import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | logout', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', MockAuthService);
  });

  test('visiting /teams and clicking Logout', async function (assert) {
    this.owner.lookup('service:auth').currentUserId = '1';
    await visit('/teams/linkedin'); //Go to the /teams url

    // await this.pauseTest();
    assert.ok(
      currentURL().startsWith('/teams'),
      'Should be on a /teams page before logout'
    );

    await click('.team-sidebar__logout-button');
    // await this.pauseTest();
    assert.equal(
      currentURL(),
      '/login',
      'Should be redirected to the /login page after logout'
    );
  });
});
