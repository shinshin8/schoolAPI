const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { getStudent } = require('../model/school');

router.get('/', async(req, res, next) =>{
    try {
        // クエリパラメータから生徒の出席番号を取得
        const idStr = req.query.studentId;
        // 取得した出席番号を文字列型から数値型に変換
        const id = Number(idStr);
        // DBから生徒達の情報を取得
        const getSngleStudent = await getStudent(id)
        if(!getSngleStudent){
            return res.status(400).json({
                message: 'cannot get student.'
            })
        }
        res.status(200).json({
            students: getSngleStudent
        })
    } catch (error) {
        dbConn.end();
        next();
    }
});

module.exports = router;