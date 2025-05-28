import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  loginAsUserWithId(value) {
    console.log('Login as user with ID:', value);
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
