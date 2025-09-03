const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productcontroller');

router.post('/', productCtrl.create);
router.get('/', productCtrl.getAll);
router.get('/:id', productCtrl.getById);
router.put('/:id', productCtrl.update);
router.delete('/:id', productCtrl.remove);

module.exports = router;