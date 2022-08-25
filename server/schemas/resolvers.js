console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }


const { User } = require('../models');

const resolvers = {
  Query: {
    
  },
  Mutation: {
    saveBook: async (parent, { req, book  })=> {
        try {
            console.log(JSON.stringify(req, null, 2));
          const updatedUser = await User.findOneAndUpdate(
            { _id: req.body.user._id },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true }
        );
        return res.json(updatedUser);
        } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    }
  },
};

module.exports = resolvers;
