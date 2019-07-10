
const { View, BotTextMessage } = require('botfuel-dialog');

class ThanksView extends View {
  render() {
    return [new BotTextMessage("You're welcome!")];
  }
}

module.exports = ThanksView;
