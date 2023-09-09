import jwt from 'jsonwebtoken'

const generteToken = (id) => {
    return jwt.sign({ id }, "123456789", {
        expiresIn: '30d'
    })
}

export default generteToken