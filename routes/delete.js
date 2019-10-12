const express = require('express');
const router = express.Router();
const {dbConn} = require('../utils/db_utils');
const { deleteStudent } = require('../model/school');

router.delete('/', async(req, res)=>{
    try {
        // クエリパラメータから対象の生徒の出席番号を取得する。
        const idStr = req.query.studentId;
        // 取得した出席番号を文字列型から数値型に変更する。
        const studentID = Number(idStr);
        // DBからの生徒の削除処理
        const leavingSchool = await deleteStudent(studentID);
        if(leavingSchool.affectedRows === 0){
            return res.status(204).json({
                msg: 'The student has been left.'
            })
        }
        return res.status(200).json({
            msg: 'A student left our school.'
        })
    } catch (error) {
        dbConn.end();
        return res.status(500).json({
            msg: error
        })
    }
});

module.exports = router;