const models = require('../models/wordsModel');

const dbController = {};

dbController.getChineseWords = (req, res, next) => {
  console.log('in getWords');

  models.Chinese.find({})
    .then((response) => response)
    .then((data) => {
      res.locals.words = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Could not retrieve words from database',
        message: { error: `An error occurred: ${err}` },
      });
    });
};
