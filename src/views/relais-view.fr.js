const { PromptView, BotTextMessage } = require('botfuel-dialog');

class RelaisView extends PromptView {
    render(userMessage, { matchedEntities, missingEntities }) {
        const hasRelais = !!matchedEntities.autreRelais && !missingEntities.autreRelais;
        const isRelaisPositive = hasRelais && matchedEntities.autreRelais.values[0].value;

        if (isRelaisPositive) {
            return [
                new BotTextMessage('Très bien, je recherche les relais colis pour Lannion'),
                new BotTextMessage('Nous pouvons livrer votre colis au magasin Intermarché Lannion Saint Marc, ou au magasin Decathlon Saint Quay Perros  ou au magasin Celtic fleur  à Lannion'),
            ];
        }
        if (!hasRelais) {
            return [new BotTextMessage('repondez par oui ou non')];
        }

        return [new BotTextMessage("Je vous souhaite une bonne journée")];
    }
}

module.exports = RelaisView;