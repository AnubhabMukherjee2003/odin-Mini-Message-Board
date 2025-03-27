const messages = require("../db");
module.exports = {
  getForm: (req, res) => {
    res.render("form");
  },
  postMessage: (req, res) => {
    const { messageText, messageUser } = req.body;

    if (!messageText || !messageUser) {
      return res.status(400).send("Both message text and user are required.");
    }
    messages.push({
      user: messageUser,
      text: messageText,
      added: new Date(),
    });

    res.redirect("/");
  },
};
