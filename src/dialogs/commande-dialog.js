const { PromptDialog } = require('botfuel-dialog');

class CommandeDialog extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            return this.triggerNext('thanks');
        }
        return this.wait();
    }
}

TravelDialog.params = {
    namespace: 'commande',
    entities: {
        letter: {
            dim: 'string',
        },
    },
};

module.exports = CommandeDialog;