const models = require('../models/wordsModel');

const dbController = {};

dbController.getChineseWords = (req, res, next) => {
  console.log('in getWords');

  models.chinese_words
    .aggregate([{ $sample: { size: 1 } }])
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((data) => {
      res.locals.words = data;
      console.log(data);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Could not retrieve words from database',
        message: { error: `An error occurred: ${err}` },
      });
    });
};

// dbController.addWord = (req, res, next) => {
//   console.log('adding word');
// };
