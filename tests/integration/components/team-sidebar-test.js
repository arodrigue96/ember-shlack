import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

// Create a stub auth service
class AuthServiceStub extends Service {
  currentUserId = null;
  loginWithUserId() {}
  logout() {}
}

module('Integration | Component | team-sidebar', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', AuthServiceStub);

    // Mock the store service if needed
    this.owner.register(
      'service:store',
      Service.extend({
        findAll() {
          return [];
        },
      })
    );

    // Add any other necessary mocks or stubs
  });

  test('it renders with custom assertions', async function (assert) {
    this.set('myTeam', {
      name: '',
      channels: [
        {
          name: 'general',
        },
      ],
    });

    await render(hbs`<TeamSidebar @team={{this.myTeam}} />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
      ['Aniol Rodriguez', 'Channels', '#', 'general', 'Logout']
    );
  });
});
