const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Profle = require('../../models/Profile')
const User = require('../../models/User')

// @route  GET api/profile/me
// @desc   Get current user's profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']) //set user id from the token

    if (!profile) {
      return res.status(400).json({ msg: 'There is no orifile for this user' })
    }

    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router