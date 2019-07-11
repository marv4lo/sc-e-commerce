const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class numCommandeExtractor extends CorpusExtractor {
    constructor() {
        super({
            dimension: 'numCommande',
            corpus: new FileCorpus(`${__dirname}/../corpora/num.txt`),
            options: {},
        });
    }
}

module.exports = numCommandeExtractor;