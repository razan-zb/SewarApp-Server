import { UserService } from '../services/user.service.js';
import jwt from 'jsonwebtoken'
import 'dotenv/config'; // Automatically loads the .env file

const secretKey = process.env.JWT_SECRET_KEY; 



export class UserController {
 

  static async registerUser(req, res) {
    const userData = req.body;
    const user = await UserService.createUser(userData);
    return res.status(201).json(user);
  }


  static async loginUser(req, res) {
    const { name, password } = req.body;
    const user = await UserService.loginUser(name, password);
    if (user) {
      // Generate token
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
      return res.json({ message: 'Login successful', user: { ...user.toObject(), token } });
    }
    return res.status(401).json({ message: 'Login failed' });
  }

  static async getUser(req, res) {;
     const userEmail = req.params.userEmail;
     const user = await UserService.getUserByEmail(userEmail);
    return res.json(user);
  }

  static async updateUser(req, res) {
    try {
      const userEmail = req.params.userEmail;
      const updateData = req.body;
      const updatedUser = await UserService.updateUser(userEmail, updateData);
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'An error occurred while updating the user' });
    }
  }

  static async deleteUser(req, res) {
    const userEmail = req.params.userEmail;
    try {
      // Attempt to delete the client
      const result = await UserService.deleteUser(userEmail);
      
      // Check if the result indicates that the client was not found or not deleted
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // If deletion was successful, send a 204 No Content status
      return res.status(204).send();
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error status
      console.error(error);
      return res.status(500).json({ message: "An error occurred while deleting the user" });
    }
  }

  static async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();
    return res.json(users);
  }
} 
