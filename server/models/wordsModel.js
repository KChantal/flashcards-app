const mongoose = require('mongoose');
const { MONGO_URI } = require('../../private/secrets');

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'flashcards',
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;

const chineseSchema = new Schema({
  english: String,
  chinese: String,
  pinyin: String,
  category: String,
});

const chinese_words = mongoose.model('chinese_words', chineseSchema);

module.exports = {
  chinese_words,
};
