const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nomProduit: { type: String, required: true },
    typeProduit: { type: String, required: true },
    prixProduit: { type: Number, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Produit', productSchema);
