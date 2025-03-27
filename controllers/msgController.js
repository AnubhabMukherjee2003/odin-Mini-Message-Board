const messages = require("../db");

module.exports = {
  redirectIndex: (req, res) => {
    res.redirect("/");
  },
  getMessagebyId: (req, res) => {
    const id = req.params.id;
    res.render("message", { message: messages[id] });
  },
};
