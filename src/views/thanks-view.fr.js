const { View, BotTextMessage } = require('botfuel-dialog');

class ThanksView extends View {
    render() {
        return [new BotTextMessage("Je vous souhaite une bonne journée")];
    }
}

module.exports = ThanksView;