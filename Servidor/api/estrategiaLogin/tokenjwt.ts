const jwt = require('jsonwebtoken')

export function criaTokenJWT(login:{id:number, senha:string, usuarioId:number}){
    const payload = {
        id: login.id
    }
    const token = jwt.sign(payload, "MwRs2t6n02UtPUJ2WKXOIgXjIYZCt0L1qykUwHrqZBoUH0aFDnA5LWSyFarMWjwqgRqZB6F9osgu8pGu++2hRZzN603ItDuRYOvcHRq25Y0My/TadRWa6XCaUCaLYLiCMjWakt5alvLr4N47mK7sZw+SpATjH2E3mtgp1dDIDnQFVu4TQmApMkU6tNKAF9k08prO2nq3/3A99YpixbPut9I9o6ushHm9z2DQkgehVFRS2Fv5KIoFOwFumpi1MngXoGBelnAs0MCYVu72Ie2W/3Tqeh0QrP6bHoDGqHGyMI6txXw8nO9Hf9e6f7Iy+Nf/Gf3MjuUrVq15C9rYVMt6Aw==",{expiresIn: '60m'})
    return token;
}