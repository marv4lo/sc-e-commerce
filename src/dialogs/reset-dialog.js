const { BaseDialog } = require('botfuel-dialog');

class ResetDialog extends BaseDialog {
    async dialogWillComplete() {
        return this.startNewConversation('greetings');
    }
}

module.exports = ResetDialog;