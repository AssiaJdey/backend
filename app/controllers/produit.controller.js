const produitModel = require('../models/produit.model.js')

// Create and Save a new produit
exports.create = async (req, res) => {
    
    
   const client = new produitModel({
        nom:  req.body.nom,
        categorie:req.body.categorie,
        description: req.body.description,
        ingredients:req.body.ingredients,
        taille:req.body.taille,
        photos:req.body.photos,
        temps_de_preparatin:req.body.temps_de_preparatin,
        en_promo:req.body.en_promo,
        discount:req.body.discount,
        nbr_view: req.body.nbr_view,
        nbr_like: req.body.nbr_like,
        nbr_share: req.body.nbr_share,
        nbr_sales: req.body.nbr_sales,
        id_menu:req.body.id_menu
    });
    
    await produit.save().then(data => {
        res.send({
            message:"Produit created successfully!!",
            produit:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating produit"
        });
    });
};
exports.findAll = async (req, res) => {
    
    try {
        produitModel.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
          })
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
//Find produit by id
exports.findOne = async (req, res) => {
    try {
        const produit = await produitModel.findById(req.params.id);
        res.status(200).json(produit);
    } catch(error) {
        res.status(404).json({ message: "chui la"});
    }
};
// Update a produit by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await produitModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Produit not found.`
            });
        }else{
            res.send({ message: "Produit updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a produit with the specified id in the request
exports.destroy = async (req, res) => {
    await produitModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Produit not found.`
          });
        } else {
          res.send({
            message: "Produit deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};