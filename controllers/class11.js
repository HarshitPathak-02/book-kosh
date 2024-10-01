const Book = require("../Models/book");

module.exports.class11Home = (req,res)=>{
    res.render("11/home")
}

module.exports.class11Science = async (req,res)=>{
    const science11Books = await Book.find({});
    res.render("11/science/science11", {science11Books})
}

module.exports.class11Commerce = async (req,res)=>{
    const commerce11Books = await Book.find({});
    res.render("11/commerce/commerce11", {commerce11Books})
}
module.exports.class11Arts = async (req,res)=>{
    const arts11Books = await Book.find({});
    res.render("11/arts/arts11", {arts11Books})
}
module.exports.class11ArtsShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/arts/condition.ejs",{book})
}

module.exports.class11CommerceShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/commerce/condition.ejs",{book})
}

module.exports.class11ScienceShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/science/condition.ejs",{book})
}