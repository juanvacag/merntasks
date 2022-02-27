const express = require('express');
const router = express.Router();
const proyetoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//crea proyectos
//api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyetoController.crearProyecto
)

router.get('/',
    auth,
    proyetoController.crearProyecto
)

module.exports = router;