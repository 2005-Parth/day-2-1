import mongoose from "mongoose";

const memeSchema = new mongoose.Schema({
    /*
    title
    imageUrl
    imageId
    author
    likes
    */
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    imageId: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},{
    timestamps: true,
});

const Meme = mongoose.model("Meme", memeSchema);

export default Meme;