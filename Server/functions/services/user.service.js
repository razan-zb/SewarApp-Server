import bcrypt from 'bcrypt';
import { UserDal } from '../dal/user.dal.js';

export class UserService {
  
  static async createUser(userData) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;
    return UserDal.createUser(userData);
  }

  static async loginUser(name, password) {
    const user = await UserDal.getUserByName(name);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  static async getUserByEmail(userEmail) {
    return UserDal.getUserByEmail(userEmail);
  }
  
  static async updateUser(userEmail, updateData) {
    return UserDal.updateUser(userEmail, updateData);
  }

  static async deleteUser(userEmail) {
    return UserDal.deleteUser(userEmail);
  }

  static async getAllUsers() {
    return UserDal.getAllUsers();
  }
}
  