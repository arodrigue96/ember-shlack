import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChatContainerComponent extends Component {
  @tracked messages = [];

  @action
  async loadMessages() {
    const {
      channel: { id, teamId },
    } = this.args;

    const response = await fetch(
      `/api/teams/${teamId}/channels/${id}/messages`
    );

    this.messages = await response.json();
  }
}
