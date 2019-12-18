const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {
    getAll : ()=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * from stay ',(error, status1)=>{
                if (!error)
                    resolve(status1,200)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getLimit : ()=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * from stay limit  4 ',(error, status1)=>{
                if (!error)
                    resolve(status1,200)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },

filterLocation : (location)=> { 
    return new Promise((resolve,reject)=>{
        db.query("SELECT * FROM stay WHERE location LIKE CONCAT('%', ?,  '%')",[location],(error, status1)=>{
            if (!error)
                resolve(status1)//mencobanya di console.log dulu
             else
               reject(error)
            });
    })
  },
    getByID : (id)=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM db_book WHERE id = ?',[id],(error, status1)=>{
                if (!error)
                    resolve(status1)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getGenre : ()=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM genre',(error, status1)=>{
                if (!error)
                    resolve(status1)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getStatus : ()=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM book_status',(error, status1)=>{
                if (!error)
                    resolve(status1)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getTitle : (title)=> { 
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM db_book WHERE tittle LIKE CONCAT('%', ?,  '%')",[title],(error, status1)=>{
                if (!error)
                    resolve(status1)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getByStatus : status => { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT b.id, b.tittle, b.author, b.image_url, b.description, s.status, g.genre  FROM db_book b INNER JOIN book_status s ON b.status = s.id INNER JOIN genre g ON b.genre = g.id WHERE b.status=?',[status],(error, status1)=>{
                if (!error)
                    resolve(status1,200)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },
    getByGenre : genre => { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT b.id, b.tittle, b.author, b.image_url, b.description, s.status, g.genre  FROM db_book b INNER JOIN book_status s ON b.status = s.id INNER JOIN genre g ON b.genre = g.id WHERE b.genre =?',[genre],(error,genre1)=>{

  
                if (!error)
                    resolve(genre1,200)//mencobanya di console.log dulu
                else
                   reject(error)
                })
        })
    },
    deleteBooks : id => {
        return new Promise((resolve,reject)=>{
            db.query('DELETE FROM db_book where id = ?',[id],(error,id1)=>{
        
                if (!error)
                resolve("Delete Succesfully",id1)//mencobanya di console.log dulu
                else
                reject(error)
            });
        })
    },
    postBooks : body =>{
        return new Promise((resolve,reject)=> {
            db.query('INSERT INTO db_book  set ?', [body],(error,body1)=>{
                if (!error)
                resolve(body1)
                else
                reject(error)
            });
        })
    },
    putBooks :(body,id)=>{
        return new Promise ((resolve,reject)=>{
            db.query('UPDATE  db_book  set ? where id = ?', [body,id],(error,results)=>{
            if (!error)
                resolve(results)
            else
            reject(error)
        });
        
        })
    },
    UpdateStatus :(body,id)=>{
        return new Promise ((resolve,reject)=>{
            db.query('UPDATE  db_book  set ? where id = ?', [body,id],(error,results)=>{
            if (!error)
                resolve(results)
            else
            reject(error)
        });
        
        })
    },
    
};