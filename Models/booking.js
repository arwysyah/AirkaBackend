const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {
    bookingRoom: body => {
        return new Promise((resolve, reject) => {
          db.query("INSERT INTO transaction SET ?", [body], (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          });
        });
      },

getBooking :(id)=>{
    return new Promise((resolve,reject)=>{
        db.query(`SELECT transaction.id_transaction, transaction.start_date, transaction.end_date ,user.name,stay.room_type,stay.image_url FROM transaction  JOIN stay  ON stay.id_room = transaction.id_room JOIN user  ON user.id_user = transaction.id_user WHERE transaction.id_user = ? `,[id], (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

},

    }
   


