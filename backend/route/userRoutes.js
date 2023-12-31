const express = require('express')
const {registerUser, authUser, allUsers} = require('../controllers/Usercontrollers')
const { protect } = require('../middleware/authmiddleware')


const router = express.Router()

router.route('/').post(registerUser).get(protect, allUsers)
router.post('/login', authUser)

module.exports = router;