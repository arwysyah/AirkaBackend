const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {
    postWishlist: body => {
        return new Promise((resolve, reject) => {
          db.query("INSERT INTO wishlist SET ?", [body], (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          });
        });
      }
    }