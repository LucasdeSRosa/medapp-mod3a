import patientRepository from "../repositories/PatientRepository.js";

const getAllPatients = async () => {
    return patientRepository.getAllPatients();
}

const getPatientById = async (id) => {
    return patientRepository.getPatientById(id);
}

const savePatient = async ({name, birthDate, email, phone}) => {
    return patientRepository.savePatient({name, birthDate, email, phone});
}

const updatePatient = async (id, {name, birthDate, email, phone}) => {
    return patientRepository.updatePatient(id, {name, birthDate, email, phone});
}

const deletePatient = async (id) => {
    return patientRepository.deletePatient(id);
} 

const patientService = {
    getAllPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient
}

export default patientService;