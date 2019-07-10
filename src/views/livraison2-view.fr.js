const { BotTextMessage, View } = require('botfuel-dialog');

class LivraisonView extends PromptView {
  renderEntities(matchedEntities, missingEntities) {
    const messages = [];

    // Print info of obtained information
    if (Object.keys(matchedEntities).filter(key => matchedEntities[key]).length !== 0) {
      messages.push(new BotTextMessage(makeInfo(matchedEntities)));
    }

    // Ask for any missing information
    if (Object.keys(missingEntities).length !== 0) {
      messages.push(new BotTextMessage(askInfo(Object.keys(missingEntities)[0])));
    }

    if (!Object.keys(missingEntities).length) {
      messages.push([
            new BotTextMessage('Très bien'),
            new BotTextMessage('merci de me donner votre numéro de commande'),
            new BotTextMessage('Il figure sur le mail de confirmation'),
        ]);
    }

    return messages;
  }
}

const makeInfo = (entities) => {
  const savoir = entities.savoir && entities.savoir.values[0].value;
  const destination = entities.destination && entities.destination.values[0].value;
  const temps = entities.temps && entities.temps.values[0].value;

  return `
    Ici les informations que vous m'avez données:
    ${savoir ? `Destination: ${savoir}` : ''}
    ${destination ? `Destination: ${destination}` : ''}
    ${temps ? `Destination: ${temps}` : ''}
  `;
};

const askInfo = (entityName) => {
  switch (entityName) {
    case 'savoir':
      return 'Voulez vous savoir quand vous serez livré?';
    case 'destination':
      return 'Voulez vous savoir quand vous serez livré?';
    case 'temps':
      return 'Voulez vous savoir quand vous serez livré?';
    default:
      return null;
  }
};
module.exports = LivraisonView;