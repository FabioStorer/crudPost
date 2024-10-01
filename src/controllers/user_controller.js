import { generateAccessToken } from '../services/jwt_service.js';
import User from '../models/user_model.js';

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        const token = generateAccessToken(user);

        res.status(201).json({
            token
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email
        });

        if (user && (await user.isValidPassword(password))) {
            const token = generateAccessToken(user);

            res.json(token);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};