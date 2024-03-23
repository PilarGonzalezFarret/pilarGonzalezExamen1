import mongoose from "mongoose";

const PiratesSchema = new mongoose.Schema({
    pirateName : {
        type: String,
        minlength: [5, "The name of pirate must have at least 5 characters."],
        maxlength: [30, "The name of pirate must have up to 30 characters."],
        required: [true, "Pirate Name is required"],
        unique: true
        
    },
    url: {
        type: String,
        minlength: 3,
        required: [true, "Image Url is required"]
    },
    treasure:{
        type: Number,
    },
    piratePhrase:{
        type: String,
        minlength: [5, "Pirate catch phrase must have at least 5 characters."],
        required: [true, "Catch Phrase is required"]
    }

}, {timestamps: true});

const Pirates = mongoose.model("pirates", PiratesSchema);


export default Pirates;