const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class SavoirExtractor extends CorpusExtractor {
    constructor() {
        super({
            dimension: 'savoir',
            corpus: [
                new FileCorpus(`${__dirname}/../corpora/savoir.txt`),
                new FileCorpus(`${__dirname}/../corpora/lieu.txt`),
                new FileCorpus(`${__dirname}/../corpora/quand.txt`)
            ],

            options: {},
        });
    }
}

module.exports = SavoirExtractor;