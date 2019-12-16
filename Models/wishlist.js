const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {

getWishlist :(id)=>{
    return new Promise((resolve,reject)=>{
        db.query(`SELECT wishlist.id,user.username,db_book.tittle,db_book.image_url,db_book.id AS id_book FROM wishlist  JOIN db_book  ON db_book.id = wishlist.id_book JOIN user  ON user.id = wishlist.id_user WHERE wishlist.id_user = ? `,[id], (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

},
deleteWishlist : (id_book,id_user) => {
    return new Promise((resolve,reject)=>{
        db.query('DELETE  FROM wishlist where id_book = ? AND id_user=?',[id_book, id_user],(error,id1)=>{
    
            if (!error)
            resolve("Delete Succesfully",id1)//mencobanya di console.log dulu
            else
            reject(error)
        });
    })
}
}