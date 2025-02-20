import { express } from "express";
import prescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await prescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.get('/getPrescription/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const prescription = await prescriptionService.getAllPrescriptions(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.post('/postPrescription', async (req, res) => {
    const {date, appointmentId, medicine, dosage, instructions} = req.body;
    try {
        const newPrescription = await prescriptionService.savePrescription({date, appointmentId, medicine, dosage, instructions});
        res.send(newPrescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.put('/prescription/:id', async (req, res) => {
    const {id} = req.params.id;
    const {date, appointmentId, medicine, dosage, instructions} = req.body;
    try {
        const newPrescription = await prescriptionService.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions});
        res.send(newPrescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.delete('/prescription/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const prescription = await prescriptionService.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

export default router();