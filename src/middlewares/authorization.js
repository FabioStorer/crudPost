export default (role) => (req, res, next) => {
    if (role === req.user.role) {
        next();
    } else {
        res.sendStatus(403);
    }
};