const { View, BotTextMessage } = require('botfuel-dialog');

const random = max => Math.floor(Math.random() * Math.floor(max));

const responses = [
    [
        new BotTextMessage('Salut!'),
        new BotTextMessage('Que puis-je faire pour vous ?'),
    ],
    [
        new BotTextMessage('Bonjour!'),
        new BotTextMessage('Comment pourrais-je vous aider ?'),
    ],
];

class StartView extends View {
    render() {
        const randomIndex = random(responses.length);
        return responses[randomIndex];
    }
}


module.exports = StartView;