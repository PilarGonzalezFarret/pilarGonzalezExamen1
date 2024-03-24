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
    },
    // Campo de selección
    crewPosition: {
        type: String,
        enum: ['Captain', 'Tinkerbell', 'Warrior', 'Cook', 'Gunner', 'Littlefish'],
        required: [true, "Category is required"]
    },
    // Campos de casillas de verificación
    features: {
        pegLeg: {
            type: Boolean,
            default: false
        },
        eyePatch: {
            type: Boolean,
            default: false
        },
        hookHand: {
            type: Boolean,
            default: false
        }
    }
}, {timestamps: true});

const Pirates = mongoose.model("pirates", PiratesSchema);


export default Pirates;