const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


router
  .route('/')
  .get(getAllThoughts)

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