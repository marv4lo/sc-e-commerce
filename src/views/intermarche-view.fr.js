const { View, BotTextMessage } = require('botfuel-dialog');

const responses = [
    new BotTextMessage('Parfait, votre colis sera disponible au relais colis Intermarché Lannion Saint Marc demain à partir de 15H'),
    new BotTextMessage("Que puis-je faire d'autre ?"),
];

class IntermarcheView extends View {
    render() {
        return responses;
    }
}

module.exports = IntermarcheView;