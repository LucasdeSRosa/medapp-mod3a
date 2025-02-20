import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Doctor name is required'],
  },  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  login: {
    type: String,
    required: [true, 'Login is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  medicalSpeciality: {
    type: String,
    required: [true, 'Medical Speciality is required'],
  },
  medicalRegistration: {
    type: String,
    required: [true, 'Medical Registration is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
  },
}
);

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;