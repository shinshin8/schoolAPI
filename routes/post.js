const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { createStudent } = require('../model/school');

router.post('/', async(req, res)=>{
    try {
        // 新しい生徒の名前
        const newStudentName = req.body.name;
        // 新しい生徒の身長
        const newStudentHeight = req.body.height;
        // DBへの新しい生徒の登録
        const createNewStudent = await createStudent(newStudentName, newStudentHeight);
        if(createNewStudent.insertId === 0){
            return res.status(400).json({
                msg: 'cannot create a new student.'
            })
        }
        return res.status(201).json({
            msg: 'A new student joins our school!!'
        })
    } catch (error) {
        dbConn.end();
        return res.status(500).json({
            msg: error
        })
    }
});

module.exports = router;