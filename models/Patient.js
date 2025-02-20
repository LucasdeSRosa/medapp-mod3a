import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Patient name is required'],
  },
  birthDate: {
    type: Date,
    required: [true, 'Birth date is required'],
    },  
  createdAt: {
    type: Date,
    default: Date.now,
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

const patient = mongoose.model('patient', patientSchema);
export default patient;