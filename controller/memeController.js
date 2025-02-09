import Meme from "../models/meme.js";

const getMemes = async (req, res) => {
    const memes = await Meme.find()
    .populate("author")
    .populate("likes").lean();
    return res.status(200).json(memes);
};

export { getMemes };