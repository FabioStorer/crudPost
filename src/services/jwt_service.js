import jwt from 'jsonwebtoken';

export const generateAccessToken = user => jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role
}, process.env.JWT_PRIVATE_KEY,
    {
        expiresIn: '1h'
    }
);

export const verifyAccessToken = token => jwt.verify(token, process.env.JWT_PRIVATE_KEY);