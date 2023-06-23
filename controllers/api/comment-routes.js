const express = require('express');
const router = express.Router();

const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId
    });
    
    return res.json(newComment);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
