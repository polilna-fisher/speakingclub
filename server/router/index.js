const Router = require("express").Router;
const meetingController = require("../controllers/meetingController");
const partController = require("../controllers/partController");
const userController = require("../controllers/userController");
const router = new Router();

router.get("/getMeetingsList", meetingController.getMeetingList);
router.get("/getPartsList", partController.getPartsList);
router.get("/getMeeting/:id", meetingController.getMeeting);
router.get("/getPart/:id", partController.getPart);
router.post("/createMeeting", meetingController.createMeeting);
router.post("/createPart", partController.createPart);
router.patch("/bookPart/:id", partController.bookPart);
router.put("/updateMeeting/:id", meetingController.updateMeeting);
router.put("/updatePart/:id", partController.updatePart);
router.delete("/deleteMeeting/:id", meetingController.deleteMeeting);
router.delete("/deletePart/:id", partController.deletePart);
router.delete("/deleteOldMeetings/", meetingController.deleteOldMeetings);
router.delete("/deleteOldParts/", partController.deleteOldParts);
router.post("/registration", userController.registration)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.get("/activate/:link", userController.activate)
router.get("/refresh", userController.refresh)
router.get("/users", userController.getUsers)

module.exports = router;
