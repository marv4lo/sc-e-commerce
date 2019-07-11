const { PromptDialog } = require('botfuel-dialog');

class RelaisDialog extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            await this.brain.userSet(userMessage.user, 'isRelaisDialogCompleted', true);
            return this.complete();
        }
        return this.wait();
    }
}

RelaisDialog.params = {
    namespace: 'relais',
    entities: {
        autreRelais: {
            dim: 'system:boolean',
            isFulfilled: (entity, entities) => {
                const dialogEntities = entities && entities.dialogEntities;
                const autreRelais = dialogEntities && dialogEntities.autreRelais;

                if (autreRelais && !autreRelais.values[0].value) {
                    return true;
                }

                return entity;
            },
        },
    },
};

module.exports = RelaisDialog;