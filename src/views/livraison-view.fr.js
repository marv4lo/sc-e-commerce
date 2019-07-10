const { PromptView, BotTextMessage } = require('botfuel-dialog');

class LivraisonView extends PromptView {
    render(userMessage, { matchedEntities, missingEntities }) {
        const hasAnswer = !!matchedEntities.Answer && !missingEntities.Answer;
        const isAnswerPositive = hasAnswer && matchedEntities.Answer.values[0].value;

        if (!hasAnswer) {
            return [new BotTextMessage('Voulez vous savoir quand vous serez livré?')];
        }

        if (!isAnswerPositive) {
            return [new BotTextMessage('Ok que puis-je faire pour vous ?')];
        }

        if (isAnswerPositive) {
            return [
                new BotTextMessage('Très bien'),
                new BotTextMessage('merci de me donner votre numéro de commande'),
                new BotTextMessage('Il figure sur le mail de confirmation'),
            ];
        }

        return [new BotTextMessage("Qu'est ce que vous voulez alors")];
    }
}

module.exports = LivraisonView;