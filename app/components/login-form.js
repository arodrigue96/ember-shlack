import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(value) {
    console.log('Login as user with ID:', value);
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
    this.loginAsUserWithId(valid);
  }
}
