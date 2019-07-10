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
            dim: 'string',
            isFulfilled: (entity, entities) => {
                const dialogEntities = entities && entities.dialogEntities;
                const numCommande = dialogEntities && dialogEntities.numCommande;

                if (numCommande && !numCommande.values[0].value) {
                    return true;
                }

                return entity;
            },
        },
    },
};

module.exports = CommandeDialog;