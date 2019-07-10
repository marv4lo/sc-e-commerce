
const { View, BotTextMessage } = require('botfuel-dialog');

class OnboardingView extends View {
  render() {
    return [new BotTextMessage('How can I help you?')];
  }
}

module.exports = OnboardingView;
