const moment = require('moment');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: 'Please provide an email address',
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Please enter a valid email address'
      }
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    // },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

const user = new User();

user.email = 'test@test.co';
user.validate().catch(error => {
  assert.ok(error);
  assert.equal(error.errors['email'].message, 'Email Validation Failed');
});

module.exports = User;