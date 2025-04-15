// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['individual', 'retailer', 'farmer', 'ngo'],
    required: true
  },
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phone: String,
  address: String,
  organization: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
