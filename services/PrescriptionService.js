import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
    return prescriptionRepository.getAllPrescriptions();
}

const getPrescriptionById = async (id) => {
    return prescriptionRepository.getPrescriptionById(id);
}

const savePrescription = async ({date, appointmentId, medicine, dosage, instructions}) => {
    return prescriptionRepository.savePrescription({date, appointmentId, medicine, dosage, instructions});
}

const updatePrescription = async (id, {date, appointmentId, medicine, dosage, instructions}) => {
    return prescriptionRepository.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions});
}

const deletePrescription = async (id) => {
    return prescriptionRepository.deletePrescription(id);
} 

const prescriptionService = {
    getAllPrescriptions,
    getPrescriptionById,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService;