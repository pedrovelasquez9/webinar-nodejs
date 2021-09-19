const auth = require('../middlewares/auth');
const controller = require("../controllers/Users");

const UserRoutes = (app) => {
    app.post('/login', (req, res) => {
        return controller.login(req, res);
    })

    app.post('/register', (req, res) => {
        return controller.register(req, res);
    })

    app.get('/welcome', auth, (req, res) => {
        res.status(200).send("Bienvenido a Programación en Español!");
    })
}

module.exports = UserRoutes