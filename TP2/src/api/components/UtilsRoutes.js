const express = require('express');
const UtilsController = require('./UtilsController')

const router = express.Router();

router.route('/users')

    .get([
        UtilsController.readAll

    
    ])
    .post([
        UtilsController.createOne
    ]);



router.route('/users/:id')

    .get([
        UtilsController.readOneById
])
    .delete([
        UtilsController.deleteOne
])
    .put([
        UtilsController.updateUser
]);


module.exports = router;

