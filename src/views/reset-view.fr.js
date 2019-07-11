const { View, BotTextMessage } = require('botfuel-dialog');

class ResetView extends View {
    render() {
        return [new BotTextMessage('Une nouvelle conversation a demarré!')];
    }
}

module.exports = ResetView;