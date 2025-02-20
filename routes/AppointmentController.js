import { express } from "express";
import appointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.get('/getAppointment/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const appointments = await appointmentService.getAllAppointments(id);
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.post('/postAppointment', async (req, res) => {
    const {date, doctorId, patientId} = req.body;
    try {
        const newAppointment = await appointmentService.saveAppointment({date, doctorId, patientId});
        res.send(newAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.put('/appointment/:id', async (req, res) => {
    const {id} = req.params.id;
    const {date, doctorId, patientId} = req.body;
    try {
        const newAppointment = await appointmentService.updateAppointment(id, {date, doctorId, patientId});
        res.send(newAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.delete('/appointment/:id', async (req, res) => {
    const {id} = req.params.id;
    try {
        const appointment = await appointmentService.deleteAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});



export default router();