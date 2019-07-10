const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class LieuExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'lieu',
      corpus: new FileCorpus(`${__dirname}/../corpora/lieu.txt`),
      options: {},
    });
  }
}

module.exports = LieuExtractor;
