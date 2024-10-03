import User from '../models/user_model.js';
import { verifyAccessToken } from '../services/jwt_service.js';

export default async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const user = verifyAccessToken(token);

        if (user) {
            req.user = await User.findById(user._id).exec();
            next();
        } else {
            throw new Error();
        }
    } catch (error) {
        res.sendStatus(401).json();
    }
};