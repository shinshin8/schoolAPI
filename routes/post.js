const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { createStudent } = require('../model/school');

router.post('/', async(req, res, next)=>{
    try {
        // 新しい生徒の名前
        const newStudentName = '三郎';
        // 新しい生徒の身長
        const newStudentHeight = 160;
        // DBへの新しい生徒の登録
        const createNewStudent = await createStudent(newStudentName, newStudentHeight);
        if(!createNewStudent){
            return res.status(400).json({
                msg: 'cannot create a new student.'
            })
        }
        return res.status(200).json({
            msg: 'A new student joins our school!!'
        })
    } catch (error) {
        dbConn.end();
        next();
    }
});

module.exports = router;