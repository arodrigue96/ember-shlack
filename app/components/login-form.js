import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

/**
 * @type {AuthService}
 */

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} event
   */

  @action
  onSelectChanged(event) {
    this.userId = event.target.value;
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} event
   */

  @action
  onLoginFormSubmit(event) {
    const { target } = event;
    const valid = target.querySelector('select').value;

    event.preventDefault();

    this.auth.loginWithUserId(valid);
  }
}
