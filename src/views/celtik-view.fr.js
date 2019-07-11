const { View, BotTextMessage } = require('botfuel-dialog');

const responses = [
    new BotTextMessage('Parfait, votre colis sera disponible au magasin Celtik à Lannion demain à partir de 16H'),
    new BotTextMessage("Puis-je faire autre chose pour vous ?"),
];

class CeltikView extends View {
    render() {
        return responses;
    }
}

module.exports = CeltikView;