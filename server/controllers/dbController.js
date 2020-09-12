const models = require('../models/wordsModel');

const dbController = {};

dbController.getChineseWords = (req, res, next) => {
  models.chinese_words
    .aggregate([{ $sample: { size: 1 } }])
    .then((response) => {
      res.locals.words = response[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Could not retrieve words from database',
        message: { error: `An error occurred: ${err}` },
      });
    });
};

// dbController.getChineseWords();

module.exports = dbController;
