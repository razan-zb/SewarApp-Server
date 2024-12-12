import 'dotenv/config'; 
import { bucket } from '../server.js';
import { v4 as uuidv4 } from 'uuid'; // Install this with npm or yarn

export class UploadVideosController {
  static async uploadToFirebase(req, res) {
    try {
      // Check if a file is attached
      if (!req.file) {
        return res.status(400).json({ message: 'No video file uploaded.' });
      }

      const file = req.file;
      const destination = `videos/${file.originalname}`; 

      // Upload the video to Firebase using the buffer, not path
      const fileUpload = bucket.file(destination);

      await fileUpload.save(file.buffer, {
        metadata: { 
          contentType: file.mimetype, // Ensure the correct MIME type is stored
        },
        public: true, // Make the file publicly readable
        resumable: false // Disable resumable uploads
      });


      // Get the download URL
      const [downloadUrl] = await fileUpload.getSignedUrl({
        action: 'read',
        expires: '03-01-2500', // Set far future expiration date
      });

      // Return the download URL in the response
      return res.status(200).json({ url: downloadUrl });
    } catch (error) {
      console.error('Error uploading to Firebase:', error);
      return res.status(500).json({ message: 'Error uploading video.', error });
    }
  }
  

  static async uploadImageToFirebase(req, res) {
    try {
      // Check if a file is attached
      if (!req.file) {
        return res.status(400).json({ message: 'No image file uploaded.' });
      }
  
      const file = req.file;
      const uniqueName = `${uuidv4()}-${file.originalname}`; // Add a unique prefix
      const destination = `images/${uniqueName}`; // Set destination for the image
  
      // Upload the image to Firebase using the buffer (not path)
      const fileUpload = bucket.file(destination);
      await fileUpload.save(file.buffer, {
        metadata: { 
          contentType: file.mimetype, 
        },
        public: true,
        resumable: false,
      });
  
      // Get the download URL
      const [downloadUrl] = await fileUpload.getSignedUrl({
        action: 'read',
        expires: '03-01-2500', // Set far future expiration date
      });
      // Return the download URL in the response
      return res.status(200).json({ url: downloadUrl });
    } catch (error) {
      console.error('Error uploading image to Firebase:', error);
      return res.status(500).json({ message: 'Error uploading image.', error });
    }
  }
}
