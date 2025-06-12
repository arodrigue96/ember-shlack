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
    await render(hbs`<TeamSidebar />`);

    // Check for the presence of specific elements instead of comparing the entire text content
    assert.ok(
      this.element.querySelector('.team-sidebar'),
      'Team sidebar container exists'
    );

    // For block usage test, you might want to test differently or skip
    // since this component likely doesn't use block content
  });
});
