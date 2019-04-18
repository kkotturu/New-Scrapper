var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    require: false
  },
  link: {
    type: String,
    unique: true,
    require: false
  },
  intro: {
    type: String,
    require: false
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// create model
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;