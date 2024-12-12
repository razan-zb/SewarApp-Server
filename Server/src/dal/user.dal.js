import User from '../db/models/users.js';

export class UserDal {
  static async createUser(userData) {
    const user = new User(userData);
    return user.save();
  }

  static async getUserByName(name) {
    return User.findOne({ name: name});
  }

  static async getUserByEmail(email) {
    return User.findOne({ email: email});
  }


  static async getUserById(userId) {
    return User.findById(userId);
  }

  static async updateUser(userEmail, updateData) {
    return User.findOneAndUpdate(
      { email: userEmail },  // Query to find the client by email
      updateData,              // Data to update
      { new: true,             // Return the updated document
        runValidators: true }  // Optional: run validators on the update
    );
  }

  static async deleteUser(userEmail) {
    return User.findOneAndDelete( { email: userEmail });
  }

  static async getAllUsers() {
    return User.find();
  }
}
