const express = require('express')

const router = express.Router()
const asyncHandler = require('express-async-handler')
const SendgridService = require('../../common/services/sendgrid')

const subscribeToTrack = asyncHandler(async (req, res) => {
    await SendgridService.subscribeToTrack(
        req.body.email,
        req.body.startedApplication,
        req.body.completedApplication,
        global.gConfig.SENDGRID_MAILING_LIST_ID,
    )
    return res.sendStatus(200)
})

router.route('/').post(subscribeToTrack)

module.exports = router
