const db = require('../Configs/db')

module.exports={
    getExperience: () =>{
        return new Promise((resolve,reject)=>{
            db.query('select * from experience',(error,status1)=>{
                if(!error)
                resolve(status1,200)
                else
                reject(error)
            })
        })
        
    }
}


