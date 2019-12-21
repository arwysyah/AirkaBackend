const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {

getWishlist :(id)=>{
    return new Promise((resolve,reject)=>{
        db.query(`SELECT store.id_store, user.username, stay.name, stay.location,stay.room_type,stay.image_url FROM store  JOIN stay  ON stay.id_room = store.id_room JOIN user  ON user.id_user = store.id_user WHERE store.id_user`,[id], (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

},
deleteWishlist : (id_room,id_user) => {
    return new Promise((resolve,reject)=>{
        db.query('DELETE  FROM store where id_room = ? AND id_user=?',[id_user, id_user],(error,id1)=>{
    
            if (!error)
            resolve("Delete Succesfully",id1)//mencobanya di console.log dulu
            else
            reject(error)
        });
    })
}
}