import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    instruments: {
        type: Object,
        required: false
    },
    genres: {
        type: String,
        required: false
    },
    availability: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;

