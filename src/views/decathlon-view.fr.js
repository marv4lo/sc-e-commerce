const { View, BotTextMessage } = require('botfuel-dialog');

const responses = [
    new BotTextMessage('Parfait, votre colis sera disponible au magasin Décathlon à Saint-Quay Perros demain à partir de 16H'),
    new BotTextMessage("Puis-je faire autre chose pour vous ?"),
];

class DecathlonView extends View {
    render() {
        return responses;
    }
}

module.exports = DecathlonView;