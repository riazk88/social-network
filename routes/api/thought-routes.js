const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


router
  .route('/')
  .get(getAllThought)

router
  .route('/:userId')
  .post(addThought)


router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtId/reaction')
.put(addReaction)
.delete(deleteReaction);

module.exports = router;