
const { View, BotTextMessage } = require('botfuel-dialog');

class ResetView extends View {
  render() {
    return [new BotTextMessage('A new conversation has started!')];
  }
}

module.exports = ResetView;
