const { PromptDialog } = require('botfuel-dialog');

class LivraisonDialog extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            await this.brain.userSet(userMessage.user, 'isLivraisonDialogCompleted', true);
            return this.complete();
        }
        return this.wait();
    }
}

LivraisonDialog.params = {
    namespace: 'livraison',
    entities: {
        Answer: {
            dim: 'system:boolean',
            priority: 2,
            isFulfilled: (entity, entities) => {
                const dialogEntities = entities && entities.dialogEntities;
                const Answer = dialogEntities && dialogEntities.Answer;

                if (Answer && !Answer.values[0].value) {
                    return true;
                }

                return entity;
            },
        },
    },
};

module.exports = LivraisonDialog;