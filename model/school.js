const {dbConn} = require('../utils/db_utils');

/**
 * 生徒たちの取得処理
 * @param {Number} id 生徒の出席番号
 * @returns {Object} プロミスオブジェクト
 */
module.exports.getStudent = id =>{
    return new Promise((resolve, reject)=>{
        // 生徒たち取得の実行クエリ
        const getStudent = `SELECT * FROM student WHERE id = ?`;
        dbConn.query(getStudent, [id], (err, result) =>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    });
}

/**
 * 新しい生徒の追加処理
 * @param {String} name 名前
 * @param {Number} height 身長
 *  @returns {Object} プロミスオブジェクト
 */
module.exports.createStudent = (name, height) =>{
    return new Promise((resolve, reject) =>{
        // 新しい生徒の追加クエリ
        const createStudent = `INSERT INTO student(name, height) VALUES(?, ?)`;
        dbConn.query(createStudent, [name, height], (err, result) =>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    });
};

/**
 * 特定の生徒の身長変更
 * @param {Number} height 生徒の身長
 * @param {Number} id 生徒の出席番号
 * @returns {Object} プロミスオブジェクト
 */
module.exports.updateStudent = id =>{
    return new Promise((resolve, reject) =>{
        // 特定の生徒情報の更新クエリ
        const updateStudent = `UPDATE student SET height = ? WHERE id = ?`;
        dbConn.query(updateStudent, [height, id], (err, result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result);
        })
    });
};

/**
 * 特定の生徒の削除処理
 * @param {Number} id 生徒の出席番号
 * @returns {Object} プロミスオブジェクト
 */
module.exports.deleteStudent = id => {
    return new Promise((resolve, reject) =>{
        // 特定の生徒の削除クエリ
        const deleteStudent = `DELETE FROM student WHERE id = ?`;
        dbConn.query(deleteStudent, [id], (err, result) =>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    });
}