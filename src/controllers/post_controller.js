import Post from '../models/post_model.js';

const store = async (req, res) => {
    try {
        const { text } = req.body;
        const user = req.user._id;
        const content = await Post.create({
            text,
            user
        });

        res.status(201).json(content);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const index = async (req, res) => {
    try {
        const content = await Post.find().exec();
        res.json(content);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const show = async (req, res) => {
    try {
        const content = await Post.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const update = async (req, res) => {
    try {
        const user = req.user._id
        const { text } = req.body;
        const content = await Post.findOneAndUpdate({
            _id: req.params.id,
            user
        }, { text }).exec();

        if (content) {
            res.json(content)
        } else {
            res.sendStatus(403);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const user = req.user._id
        const content = await Post.findOneAndDelete({
            _id: req.params.id,
            user
        }).exec();

        if (content) {
            res.json(content)
        } else {
            res.sendStatus(403);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default {
    store,
    index,
    show,
    update,
    destroy
};