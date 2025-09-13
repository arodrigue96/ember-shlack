import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChannelFooterComponent extends Component {
  @tracked
  body = '';

  get isDisabled() {
    return !this.body;
  }

  @action
  updateMessageBody(event) {
    this.body = event.target.value;
  }

  @action
  async handleSubmit(event) {
    event.preventDefault();
    await this.args.sendMessage(this.body);
    this.body = '';
  }
}
