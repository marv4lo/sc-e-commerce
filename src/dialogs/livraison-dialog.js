const { PromptDialog } = require('botfuel-dialog');

class Livraison extends PromptDialog {
    async dialogWillComplete(userMessage, data) {
        if (data.missingEntities.size === 0) {
            return this.triggerNext('thanks');
        }
        return this.wait();
    }
}


module.exports = Livraison;