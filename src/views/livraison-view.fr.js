
const { PromptView, BotTextMessage } = require('botfuel-dialog');

class LivraisonView extends PromptView {
  renderAsk() {
    return [
            new BotTextMessage('Très bien'),
            new BotTextMessage('merci de me donner votre numéro de commande'),
            new BotTextMessage('Il figure sur le mail de confirmation'),
        ];
  }
}

module.exports = LivraisonView;
