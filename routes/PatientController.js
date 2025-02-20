import express from "express";
import patientService from "../services/PatientService.js";

let router = express.Router();

router.get('/patients', async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.send(patients);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.get('/getPatient/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const patient = await patientService.getAllPatients(id);
        res.send(patient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.post('/postPatient', async (req, res) => {
    const {name, birthDate, email, phone} = req.body;
    try {
        const newPatient = await patientService.savePatient({name, birthDate, email, phone});
        res.send(newPatient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.put('/patient/:id', async (req, res) => {
    const {id} = req.params.id;
    const {name, birthDate, email, phone} = req.body;
    try {
        const newPatient = await patientService.updatePatient(id, {name, birthDate, email, phone});
        res.send(newPatient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.delete('/patient/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const patient = await patientService.deletePatient(id);
        res.send(patient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

export default router;