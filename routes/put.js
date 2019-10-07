const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { updateStudent } = require('../model/school');

router.put('/', async(req, res, next)=>{
    try {
        // クエリパラメータから対象の生徒の出席番号を取得する。
        const idStr = req.query.studentId;
        // 取得した出席番号を文字列型から数値型に変更する。
        const studentID = Number(idStr);
        // 生徒の身長の更新
        const growUpStudent = await updateStudent(studentID);
        if(!growUpStudent){
            return res.status(400).json({
                msg: 'cannot update student height'
            })
        }
        return res.status(200).json({
            msg: 'A student is growing up!!.'
        });
    } catch (error) {
        dbConn.end();
        next()
    }
});

module.exports = router;