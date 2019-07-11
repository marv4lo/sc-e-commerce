const { PromptDialog } = require('botfuel-dialog');

class CommandeDialog extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            await this.brain.userSet(userMessage.user, 'isCommandeDialogCompleted', true);
            return this.complete();
        }
        return this.wait();
    }
}

CommandeDialog.params = {
    namespace: 'commande',
    entities: {
        numCommande: {
            dim: 'numCommande',
            priority: 1,
        },
        secondAnswer: {
            dim: 'system:boolean',
            priority: 2,
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

module.exports = CommandeDialog;