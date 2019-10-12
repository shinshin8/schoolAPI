const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { getStudent } = require('../model/school');

router.get('/', async(req, res) =>{
    try {
        // クエリパラメータから生徒の出席番号を取得
        const idStr = req.query.studentId;
        // 取得した出席番号を文字列型から数値型に変換
        const id = Number(idStr);
        // DBから生徒達の情報を取得
        const getSngleStudent = await getStudent(id)
        if(!getSngleStudent.length){
            return res.status(404).json({
                message: 'The student can be found.'
            })
        }
        res.status(200).json({
            students: getSngleStudent
        })
    } catch (error) {
        dbConn.end();
        return res.status(500).json({
            msg: error
        })
    }
});

module.exports = router;