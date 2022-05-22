const commandeModel = require('../models/commande.model.js')

// Create and Save a new commande
exports.create = async (req, res) => {
    
    
   const commande = new commandeModel({
        id_produit:req.body.id_produit,
        id_client:req.body.id_client,
        id_restaurant:req.body.id_restaurant,
        id_livreur:req.body.id_livreur,
        prix_totale:req.body.prix_totale,
        duree_estimee:req.body.duree_estimee,
        duree_reel:req.body.duree_reel,
        date_de_lancemnt_de_la_commande:req.body.date_de_lancemnt_de_la_commande,
        attente_resto:req.body.attente_resto,
        attente_livreur:req.body.attente_livreur,
        estimation_resto:req.body.estimation_resto,
        estimation_livreur:req.body.estimation_livreur,
        date_de_livraison:req.body.date_de_livraison
    });
    
    await commande.save().then(data => {
        res.send({
            message:"Commande created successfully!!",
            commande:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating commande"
        });
    });
};
exports.findAll = async (req, res) => {
    
    try {
        commandeModel.find((error, data) => {
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
//Find commande by id
exports.findOne = async (req, res) => {
    try {
        const commande = await commandeModel.findById(req.params.id);
        res.status(200).json(commande);
    } catch(error) {
        res.status(404).json({ message: "chui la"});
    }
};
// Update a commande by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await commandeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Commande not found.`
            });
        }else{
            res.send({ message: "Commande updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a commande with the specified id in the request
exports.destroy = async (req, res) => {
    await commandeModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Commande not found.`
          });
        } else {
          res.send({
            message: "Commande deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};