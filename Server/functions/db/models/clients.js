import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    
  },
  phoneNumber: {
    type: String,
    required: true, 
    unique: true,
  },  
  dateOfBirth: { 
    type: Date,
    required: true,
  }, 
  lastModifingDate: {
    type: Date,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  chestHeight: {  // ارتفاع الصدر
    type: Number,
    required: true,
  },
  frontWaistHeight: {  // ارتفاع القصر الامامي
    type: Number,
    required: true,
  },
  hipHeight: {  // ارتفاع الورك
    type: Number,
    required: true,
  },
  backWaistHeight: {  // ارتفاع القصر الخلفي
    type: Number,
    required: true,
  },
  waistHeight: {  // ارتفاع الربط
    type: Number,
    required: true,
  },
  kneeHeight: {  // ارتفاع الركبه (من الخصر)
    type: Number,
    required: true,
  },
  fullLength: {  // الطول الكلي (من الكتف)
    type: Number,
    required: true,
  },
  shoulderWidth: {  // عرض الاكتاف من الخلف
    type: Number,
    required: true,
  },
  shoulderSlope: {  // ميلان الكتف (من الرقبة)
    type: Number,
    required: true,
  },
  bustDistance: {  // البعد بين نقطتي الصدر
    type: Number,
    required: true,
  },
  bustCircumference: {  // محيط الصدر
    type: Number,
    required: true,
  },
  waistCircumference: {  // محيط الخصر
    type: Number,
    required: true,
  },
  hipCircumference: {  // محيط الورك
    type: Number,
    required: true,
  },
  sleeveCircumference: {  // محيط الكم
    type: Number,
    required: true,
  },
  wristCircumference: {  // محيط زر اليد
    type: Number,
    required: true,
  },
  handCircumference: {  // محيط كف اليد
    type: Number,
    required: true,
  },
  sleeveLength: {  // طول الكم
    type: Number,
    required: true,  
  }, 
  notes: {  // طول الكم
    type: String,
    required: false,  
  },
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);

export default Client;
