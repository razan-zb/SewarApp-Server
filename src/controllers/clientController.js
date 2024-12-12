import { ClientService } from '../services/client.service.js';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export class ClientController {
  static async createClient(req, res) {
    const clientData = req.body;
    const client = await ClientService.createClient(clientData);
    return res.status(201).json(client);
  }

  static async getClients(req, res) {
    const clients = await ClientService.getClients();
    return res.json(clients);
  } 

  static async sendEmail(req, res) {
    
    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });
  
  
    // Define email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Your business email
      subject: subject || 'New Contact Message', 
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };
  
    try {
      // Send email
      let info = await transporter.sendMail(mailOptions);
      res.status(200).send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ success: false, error });
    }

  } 

  static async getClientByEmail(req, res) {
    const clientEmail = req.params.clietEmail;
    const client = await ClientService.getClientByEmail(clientEmail);
    return res.json(client);
  }

  static async getClientByPhone(req, res) {
    const clientPhone = req.params.clientPhone;
    const client = await ClientService.getClientByPhone(clientPhone);
    return res.json(client);
  }


  static async updateClient(req, res) {
    const clientPhone= req.params.clientPhone;
    const updateData = req.body;
    const updatedClient = await ClientService.updateClient(clientPhone, updateData);
    return res.json(updatedClient);
  }

  static async deleteClient(req, res) {
    const clientPhone = req.params.clientPhone;
    
    try {
      // Attempt to delete the client
      const result = await ClientService.deleteClient(clientPhone);
      
      // Check if the result indicates that the client was not found or not deleted
      if (!result) {
        return res.status(404).json({ message: "Client not found" });
      }
      
      // If deletion was successful, send a 204 No Content status
      return res.status(204).send();
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error status
      console.error(error);
      return res.status(500).json({ message: "An error occurred while deleting the client" });
    }
  }
}
