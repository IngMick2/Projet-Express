const productModel = require("../models/boutiquemodel"); 

//  Création d'un produit
exports.addProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Lister tous les produits
exports.listAll = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Lister un seul produit
exports.listOne = async (req, res) => {
    try {
        const oneProduct = await productModel.findById(req.params.id);
        if (!oneProduct) return res.status(404).json({ message: "Produit non trouvé" });
        res.status(200).json(oneProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Modifier un produit
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: "Produit non trouvé" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Produit non trouvé" });
        res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
