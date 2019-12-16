const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {

getHistory :(id)=>{
    return new Promise((resolve,reject)=>{
        db.query(`SELECT history.id, history.borrow_at, history.return_at ,user.username,db_book.tittle,db_book.image_url FROM history  JOIN db_book  ON db_book.id = history.id_book JOIN user  ON user.id = history.id_user WHERE history.id_user = ? `,[id], (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

}
}