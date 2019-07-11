const { PromptView, BotTextMessage } = require('botfuel-dialog');

class CommandeView extends PromptView {
    render(userMessage, { matchedEntities, missingEntities }) {
        const hasFirstAnswer = !!matchedEntities.numCommande && !missingEntities.numCommande;
        const isFirstAnswerPositive = hasFirstAnswer && matchedEntities.numCommande.values[0].value;
        const hasSecondAnswer = !!matchedEntities.secondAnswer && !missingEntities.secondAnswer;
        const isSecondAnswerPositive = hasSecondAnswer && matchedEntities.secondAnswer.values[0].value;

        if (hasFirstAnswer) {
            return [
                new BotTextMessage('Votre colis sera disponible  au relais colis Intermarche de Lannion demain à partir de 14H'),
                new BotTextMessage('Voulez vous changer de relais-colis ?'),
            ];
        }

        if (!isFirstAnswerPositive) {
            return [new BotTextMessage('Okay, I’ll stop bothering you.')];
        }

        if (!hasSecondAnswer) {
            return [new BotTextMessage('Can you answer by yes or no?')];
        }

        if (isSecondAnswerPositive) {
            return [new BotTextMessage('You said yes!')];
        }

        return [new BotTextMessage('You said no.')];

    }
}

module.exports = CommandeView;