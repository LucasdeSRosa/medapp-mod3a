import express from "express";
import doctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";

let router = express.Router();

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.get('/getDoctor/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const doctor = await doctorService.getAllDoctors(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.post('/postDoctor', async (req, res) => {
    const {name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = await doctorService.saveDoctor({name, login, password: hashedPassword, medicalSpeciality, medicalRegistration, email, phone});
        res.send(newDoctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.put('/doctor/:id', async (req, res) => {
    const {id} = req.params.id;
    const {name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body;
    try {
        const newDoctor = await doctorService.updateDoctor(id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone});
        res.send(newDoctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.delete('/doctor/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const doctor = await doctorService.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

export default router;