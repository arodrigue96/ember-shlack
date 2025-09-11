import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';
import Pretender from 'pretender';

module('Acceptance | logout', function (hooks) {
  setupApplicationTest(hooks);
  let server;

  hooks.beforeEach(function () {
    server = new Pretender();

    server.get('/api/teams', function () {
      const data = {
        teams: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            order: 2,
            iconUrl: '/assets/img/linkedin.png',
          },
        ],
      };
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(data),
      ];
    });

    server.get('/api/teams/:id', function () {
      const data = {
        id: 'linkedin',
        name: 'LinkedIn',
        order: 2,
        iconUrl: '/assets/img/linkedin.png',
        channels: [
          {
            id: 'recruiting',
            name: 'recruiting',
            description: 'Recruiting',
            teamId: 'linkedin',
          },
        ],
      };
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(data),
      ];
    });

    this.owner.register('service:auth', MockAuthService);
  });

  hooks.afterEach(function () {
    if (server) server.shutdown();
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
