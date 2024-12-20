const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 發表新帖子
router.post('/', async (req, res) => {
    const post = new Post({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        date: new Date()
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router; 