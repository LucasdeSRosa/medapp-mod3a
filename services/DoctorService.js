import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return doctorRepository.getAllDoctors();
}

const getDoctorById = async (id) => {
    return doctorRepository.getDoctorById(id);
}

const saveDoctor = async ({name, login, password, medicalSpeciality, medicalRegistration, email, phone}) => {
    return doctorRepository.saveDoctor({name, login, password, medicalSpeciality, medicalRegistration, email, phone});
}

const updateDoctor = async (id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone}) => {
    return doctorRepository.updateDoctor(id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone});
}

const deleteDoctor = async (id) => {
    return doctorRepository.deleteDoctor(id);
} 

const doctorService = {
    getAllDoctors,
    getDoctorById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService;