const express = require('express')
const { createStudent,getResult, getStatus } = require('../Controller/studentController')
const multer = require('multer')

const router = express.Router()

router.post('/upload',multer({ dest: './CSVfiles' }).single('files'),createStudent)
router.get('/students/:id/result',getResult)
router.get('/students',getStatus)
module.exports = router