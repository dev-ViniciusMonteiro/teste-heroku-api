import app  from './app'
import db from './models'
const logger = require('./config/logger')
require('dotenv').config()

if(process.env.NODE_ENV == undefined){
    db.sequelize.sync().then(()=>{
     app.listen((process.env.PORT || 8877),()=>{
         logger.log('info',`Servidor rodando na porta: 3000`)
        console.log("APP ESCUTANDO NA PORTA 3000")
        })
    })
}else{
    app.listen((process.env.PORT || 8877),()=>{
        logger.log('info',`Servidor rodando na porta: 3000`)
       console.log("APP ESCUTANDO NA PORTA 3000")
       })
}