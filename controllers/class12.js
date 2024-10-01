const Book = require("../Models/book");

module.exports.class12Home = (req,res)=>{
    res.render("12/home")
}

module.exports.class12Science = async (req,res)=>{
    const science12Books = await Book.find({});
    res.render("12/science/science12", {science12Books})
}

module.exports.class12Commerce = async (req,res)=>{
    const commerce12Books = await Book.find({});
    res.render("12/commerce/commerce12", {commerce12Books})
}

module.exports.class12Arts = async (req,res)=>{
    const arts12Books = await Book.find({});
    res.render("12/arts/arts12", {arts12Books})
}

module.exports.class12ScienceShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("12/science/condition.ejs",{book})
}

module.exports.class12ArtsShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("12/arts/condition.ejs",{book})
}

module.exports.class12CommerceShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("12/commerce/condition.ejs",{book})
}