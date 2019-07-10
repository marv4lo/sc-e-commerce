const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class CommandeExtractor extends CorpusExtractor {
    constructor() {
        super({
            dimension: 'string',
            corpus: new FileCorpus(`${__dirname}/../corpora/num.txt`),
            options: {},
        });
    }
}

module.exports = CommandeExtractor;