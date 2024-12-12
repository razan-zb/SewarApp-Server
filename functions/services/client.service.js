import { ClientDal } from '../dal/client.dal.js';

export class ClientService {
  static async createClient(clientData) {
    return ClientDal.updateClient(clientData.phoneNumber,clientData);
  }

  static async getClients() {
    return ClientDal.getClients();
  }

  static async getClientByEmail(clientEmail) {
    return ClientDal.getClientByEmail(clientEmail);
  }

  static async getClientByPhone(clientPhone) {
    return ClientDal.getClientByPhone(clientPhone);
  }

  static async updateClient(clientPhone, updateData) {
    return ClientDal.updateClient(clientPhone, updateData);
  }

  static async deleteClient(clientPhone) {
    return ClientDal.deleteClient(clientPhone);
  }
}
