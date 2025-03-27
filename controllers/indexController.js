const messages = require("../db");

module.exports = {
  getIndex: (req, res) => {
    res.render("index", { messages });
  },
};
