const User = require("../Models/user.js");
const passport = require("passport");

module.exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("signiin called");
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: info?.message || "Invalid username or password",
      });
    }

    // Establish the session
    req.logIn(user, (err) => {
      if (err) return next(err);

      // Optional: reduce payload; avoid sending sensitive fields
      const safeUser = {
        _id: user._id,
        username: user.username,
        email: user.email,
        isSeller: user.isSeller,
        fullname: user.fullname
        // add any other safe fields you need
      };

      return res.status(200).json({
        success: true,
        user: safeUser,
        message: "Logged in successfully",
      });
    });
  })(req, res, next);
};

module.exports.signup = async (req, res) => {
  try {
    console.log("sign up called");
    let { username, email, password, fullname, phone, isSeller } = req.body;
    const newUser = new User({ email, username, fullname, phone, isSeller });
    const registeredUser = await User.register(newUser, password);
    res.json({ msg: "registered" });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
};

module.exports.logout = (req, res, next) => {
  // Passport 0.6+ requires a callback
  req.logout((err) => {
    console.log("logout called")
    if (err) return next(err);

    // Destroy server session and clear cookie for cleanliness
    req.session.destroy((sessErr) => {
      if (sessErr) return next(sessErr);

      // Name defaults to 'connect.sid' unless customized
      res.clearCookie("connect.sid");
      return res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    });
  });
};
