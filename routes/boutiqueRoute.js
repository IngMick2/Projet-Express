const express = require('express');
const router = express.Router();
const productController = require('../controllers/BoutiqueControllers');

//  Lister tous les produits
router.get('/allProduct', productController.listAll);

//  Obtenir un seul produit par ID
router.get('/oneProduct/:id', productController.listOne);

//  Ajouter un produit
router.post('/addProduct', productController.addProduct);

//  Modifier un produit par ID
router.put('/updateProduct/:id', productController.updateProduct);

router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;
