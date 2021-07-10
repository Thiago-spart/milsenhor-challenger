const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    user_name: String,
    user_email: String,
    user_password: String,
  },
  {
    timestamps: true,
  }
);

DataSchema.pre("save", function (next) {
  if (!this.isModified("user_password")) {
    return next();
  }

  this.user_password = bcrypt.hashSync(this.user_password, 10);
  next();
});

DataSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.user_password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

const users = mongoose.model("users", DataSchema);
module.exports = users;
