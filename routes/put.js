const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { updateStudent } = require('../model/school');

router.put('/', async(req, res)=>{
    try {
        // クエリパラメータから対象の生徒の出席番号を取得する。
        const idStr = req.query.studentId;
        // 取得した出席番号を文字列型から数値型に変更する。
        const studentID = Number(idStr);
        // クエリパラメータから対象の生徒の身長を取得する。
        const heightStr = req.query.height;
        // 取得した身長を文字列型から数値型に変更する。
        const height = Number(heightStr);
        // 生徒の身長の更新
        const growUpStudent = await updateStudent(height, studentID);
        if(growUpStudent.affectedRows === 0){
            return res.status(404).json({
                msg: 'The student can be found.'
            })
        }
        return res.status(200).json({
            msg: 'A student is growing up!!.'
        });
    } catch (error) {
        dbConn.end();
        return res.status(500).json({
            msg: error
        })
    }
});

module.exports = router;