const jwt = require('jsonwebtoken')

const cookieParser = require('cookie-parser')



const validarJwt = (req, res, next) => {
    
       
    const xToken = req.cookies.xtoken;
        

        if (!xToken) {
            return res.render('index', {
                titulo: 'no has iniciado sesion de administrador ',
                msg: 'si no eres administrador no puedes acceder'
            })
        }

        try {

            const payload = jwt.verify(xToken, process.env.JWT_SECRET_KEY);
            
            req.header.id = payload.uid
            req.header.name = payload.name
            

        } catch (error) {
            res.render('index')
        }

        next()


}

module.exports={
    validarJwt
}