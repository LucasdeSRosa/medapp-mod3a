import { Patient } from '../models/Patient.js';

const getAllPatients = async () => {
  try {
    return await Patient.find();
  } catch (error) {
    throw new Error(error); 
  }
};

const getPatientById = async (id) => {
  try {
    return await Patient.findById(id);
  } catch (error) {
    throw new Error(error); 
  }
}

const savePatient = async ({name, birthDate, email, phone}) => {
    try {
        const patient = new Patient({name, birthDate, email, phone});
        return await patient.save();
    } catch (error) {
        throw new Error(error);    
    }
}

const updatePatient = async (id, {name, birthDate, email, phone}) => {
    try {
        return await Patient.findByIdAndUpdate(id, {name, birthDate, email, phone}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletePatient = async (id) => {
    try {
        return await Patient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const patientRepository = {
    getAllPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient
}

export default patientRepository;