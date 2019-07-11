const { BotTextMessage, View } = require('botfuel-dialog');

class GreetingsView extends View {
    render(userMessage, { greeted }) {
        if (greeted) {
            return [new BotTextMessage('Hello again !')];
        }
        return [new BotTextMessage('Hello !')];
    }
}

module.exports = GreetingsView;