const { PromptDialog } = require('botfuel-dialog');

class QuestionDialog extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            await this.brain.userSet(userMessage.user, 'isQuestionDialogCompleted', true);
            return this.complete();
        }
        return this.wait();
    }
}

QuestionDialog.params = {
    namespace: 'question',
    entities: {
        firstAnswer: {
            dim: 'system:boolean',
            priority: 2,
        },
        secondAnswer: {
            dim: 'system:boolean',
            priority: 1,
            isFulfilled: (entity, entities) => {
                const dialogEntities = entities && entities.dialogEntities;
                const firstAnswer = dialogEntities && dialogEntities.firstAnswer;

                if (firstAnswer && !firstAnswer.values[0].value) {
                    return true;
                }

                return entity;
            },
        },
    },
};

module.exports = QuestionDialog;