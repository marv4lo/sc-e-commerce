const { PromptView, BotTextMessage } = require('botfuel-dialog');

class QuestionView extends PromptView {
    render(userMessage, { matchedEntities, missingEntities }) {
        const hasFirstAnswer = !!matchedEntities.firstAnswer && !missingEntities.firstAnswer;
        const isFirstAnswerPositive = hasFirstAnswer && matchedEntities.firstAnswer.values[0].value;
        const hasSecondAnswer = !!matchedEntities.secondAnswer && !missingEntities.secondAnswer;
        const isSecondAnswerPositive = hasSecondAnswer && matchedEntities.secondAnswer.values[0].value;

        if (!hasFirstAnswer) {
            return [new BotTextMessage('Would you like a second question?')];
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

module.exports = QuestionView;