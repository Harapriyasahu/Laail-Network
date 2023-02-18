const {Router} = require("express")
const UserModel = require("../models/User.model")
const userRouter = Router();



// get all users
userRouter.get('/users', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // get a specific user
  userRouter.get('/users/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // create a new user
  userRouter.post('/users', async (req, res) => {
    const user = new UserModel(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


module.exports = userRouter;