const User = require("../models/user");
const Message = require("../models/messages");

module.exports.renderContactForm = async (req, res) => {
  const { id } = req.params;
  const { listingId } = req.query;

  const host = await User.findById(id);

  res.render("messages/contact", { host, listingId });
};

module.exports.sendMessage = async (req, res) => {
  const { id } = req.params;
  const message = new Message({
    from: req.user._id,
    to: id,
    content: req.body.message,
  });

  await message.save();
  console.log("Message saved:", message);
  req.flash("success", "Message sent!");
  res.redirect("/listings");
};
