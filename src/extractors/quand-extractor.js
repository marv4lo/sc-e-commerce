const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class QuandExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'quand',
      corpus: new FileCorpus(`${__dirname}/../corpora/quand.txt`),
      options: {},
    });
  }
}

module.exports = QuandExtractor;
