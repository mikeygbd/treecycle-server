const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Tree = mongoose.model('Tree');

const router = express.Router();

router.use(requireAuth);

router.get('/trees', async (req, res) => {
  const trees = await Tree.find({ userId: req.user._id });

  res.send(trees);
});

router.post('/trees', async (req, res) => {
  const { name, treeType, height, price, locations } = req.body;

  if (!name || !treeType || !height || !price) {
    return res
      .status(422)
      .send({ error: 'You must provide a name and locations' });
  }

  try {
    const tree = new Tree({ name, treeType, height, width, price, locations, userId: req.user._id });
    await tree.save();
    res.send(tree);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
