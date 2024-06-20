const Router = require('express').Router
const meetingController = require('../controllers/meetingController')
const router = new Router()


router.get('/getAll', meetingController.getMeetingList)
router.get('/:id', meetingController.getMeeting)
router.post('/add', meetingController.createMeeting)
router.put('/update/:id', meetingController.updateMeeting)
router.delete('/delete/:id', meetingController.deleteMeeting)

module.exports = router