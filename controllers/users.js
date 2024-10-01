const User = require("../Models/user.js")

module.exports.loginForm =  (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login =  async(req,res)=>{
    req.flash("success", "Heyy Book Lover, Welcome Back !")
    res.redirect("/")
}

module.exports.signupForm = (req,res)=>{
    res.render("users/signup.ejs")
}

module.exports.signup = async(req,res)=>{
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser,password);
        req.flash("success", "Welcome to BookKosh!!")
        res.redirect("/login")
    } catch (e) {
        req.flash("error", "User already exist!!")
        res.redirect("/signup")
    }
}

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if (err) {
            return next(err);
        }
        req.flash("success","You are logged out!")
        res.redirect("/")
    })
}