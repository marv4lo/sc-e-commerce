const { View, BotTextMessage } = require('botfuel-dialog');

const responses = [
    new BotTextMessage('Parfait, votre colis sera disponible au relais colis Intermarché Lannion Saint Marc demain à partir de 15H'),
    new BotTextMessage("Puis-je faire autre chose pour vous ?"),
];

class IntermarcheView extends View {
    render() {
        return responses;
    }
}

module.exports = IntermarcheView;