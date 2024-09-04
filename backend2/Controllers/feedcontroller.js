//model
const feed = require('../Models/feed');
const User = require('../Models/user');
const Comment = require('../Models/comments');

module.exports.getfeed = async (req, res, next) => {
    try {
        navactive = [0, 1, 0, 0, 0, 0]
        // console.log('anmol')
        const feeds = await feed.find({}).populate('author');
        res.status(200).json(feeds);
    } catch (error) {
        res.status(500).json({ message: "Error", error: error })
    }

}