const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class CommandeExtractor extends CorpusExtractor {
    constructor() {
        super({
            dimension: 'commande',
            corpus: new FileCorpus(`${__dirname}/../corpora/letter.txt`),
            options: {},
        });
    }
}

module.exports = CommandeExtractor;