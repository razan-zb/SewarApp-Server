import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  phone: {  
    type: String,
    required: true, 
  },
  password: { 
    type: String,
    required: true,
    minlength: 6, // Optional: Minimum length for the password
  },
  aboutMeEn: { 
    type: String,
    required: true,
  },
  aboutMeAr: { 
    type: String,
    required: true,
  },
  aboutMeHe: { 
    type: String,
    required: true,
  },
  myVisionEn: { 
    type: String,
    required: true,
  },
  myVisionAr: { 
    type: String,
    required: true,
  },
  myVisionHe: { 
    type: String,
    required: true,
  },
  miroPhotos: [{
    type: String,
    required: false,
  }],
  miroVideos: [{
    type: String,
    required: false,
  }],
  profilePhoto:{
    type:String,
    require:false,
  }

  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
 