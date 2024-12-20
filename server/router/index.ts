const Router = require("express").Router;
import meetingController from "../controllers/meetingController";
import partController from "../controllers/partController";
import userController from "../controllers/userController";
const router = new Router();
import {body} from 'express-validator';
import authMiddleware from '../middlewares/authMiddleware';

router.get("/getMeetingsList", meetingController.getMeetingList);
router.get("/getPartsList", partController.getPartsList);
router.get("/getMeeting/:id", meetingController.getMeeting);
router.get("/getPart/:id", partController.getPart);
router.post("/createMeeting",
    body('name').notEmpty(),
    body('type').notEmpty(),
    body('host').notEmpty(),
    body('hostIcon').notEmpty(),
    body('dateTime').notEmpty().isDate(),
    body('idParts').isArray(),
    meetingController.createMeeting);
router.post("/createPart",
    body('name').notEmpty(),
    body('type').notEmpty(),
    body('topic').notEmpty(),
    body('booked').notEmpty(),
    body('dateTime').notEmpty().isDate(),
    body('questions').isArray(),
    partController.createPart);
router.patch("/bookPart/", userController.bookPart);
router.put("/updateMeeting/:id", meetingController.updateMeeting);
router.put("/updatePart/:id", partController.updatePart);
router.delete("/deleteMeeting/:id", meetingController.deleteMeeting);
router.delete("/deletePart/:id", partController.deletePart);
router.delete("/deleteOldMeetings/", meetingController.deleteOldMeetings);
router.delete("/deleteOldParts/", partController.deleteOldParts);


router.post("/registration",
    body('email').isEmail(),
    body('password').isLength({min:3, max:50}),
    body('name').isLength({min:2, max:50}),
    userController.registration)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.patch("/reset-password",
    body('email').isEmail(),
    userController.resetPassword)
router.patch("/changePassword",
    body('password').isLength({min:3, max:50}),
    userController.changePassword)
router.get("/activate/:link", userController.activate)
router.get("/reset/:link", userController.reset)
router.post("/send-activation-link-again", body('email').isEmail(), userController.repeatedlySendActivationLink)
router.post("/refresh", userController.refresh)
router.get("/me", authMiddleware, userController.getMe)

export default router;
