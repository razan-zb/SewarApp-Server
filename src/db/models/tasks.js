import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: false,
  },
  endTime: {
    type: Date,
    required: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: String,
    ref: 'User',
    required: true,
  },
  notificationScheduled: {
    type: Boolean,
    default: false,
  },
  notificationTriggerTime: {
    type: Date,
    required: false,
  },
  notificationTriggerShow: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
