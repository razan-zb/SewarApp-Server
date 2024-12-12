import Client from '../db/models/clients.js';

export class ClientDal {
  static async createClient(clientData) {
    const client = new Client(clientData);
    return client.save();
  }


  static async getClients() {
    return Client.find();
  }

  static async getClientByEmail(clientEmail) {
    return Client.findOne({email: clientEmail} );
  }

  static async getClientByPhone(clientPhone) {
    return Client.findOne({phoneNumber: clientPhone} );
  }


  static async updateClient(phoneNumber, updateData) {
    return Client.findOneAndUpdate(
      { phoneNumber: phoneNumber },  // Query to find the client by phone
      updateData,              // Data to update
      { new: true,             // Return the updated document
        runValidators: true ,
        upsert: true, }  // Optional: run validators on the update
    );
  }

  static async deleteClient(phoneNumber) {
    return Client.findOneAndDelete( { phoneNumber: phoneNumber },  // Query to find the client by email
    { new: true,             // Return the updated document
      runValidators: true }  );
  }
}
