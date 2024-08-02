const Router = require("express").Router;
const meetingController = require("../controllers/meetingController");
const router = new Router();

router.get("/getMeetingsList", meetingController.getMeetingList);
router.get("/getPartsList", meetingController.getPartsList);
router.get("/getMeeting/:id", meetingController.getMeeting);
router.get("/getPart/:id", meetingController.getPart);
router.post("/createMeeting", meetingController.createMeeting);
router.post("/createPart", meetingController.createPart);
router.patch("/bookPart/:id", meetingController.bookPart);
router.put("/updateMeeting/:id", meetingController.updateMeeting);
router.put("/updatePart/:id", meetingController.updatePart);
router.delete("/deleteMeeting/:id", meetingController.deleteMeeting);
router.delete("/deletePart/:id", meetingController.deletePart);
router.delete("/deleteOldMeetings/", meetingController.deleteOldMeetings);
router.delete("/deleteOldParts/", meetingController.deleteOldParts);

module.exports = router;
