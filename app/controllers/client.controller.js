const clientModel = require('../models/client.model.js')

// Create and Save a new client
exports.create = async (req, res) => {
    
    
   const client = new clientModel({
        nom_client:  req.body.nom_client,
        prenom_client:req.body.prenom_client,
        adresse: req.body.adresse,
        date_de_naissance:req.body.date_de_naissance,
        sexe:req.body.sexe,
        email:req.body.email,
        telephone:req.body.telephone,
        photos_de_profil:req.body.photos_de_profil,
        photos_de_couverture:req.body.photos_de_couverture,
        fonction:req.body.fonction,
        bio:Sreq.body.bio,
        reseau:req.body.reseau,
        banque:req.body.banque,
        rib:req.body.rib,
        credit:req.body.credit,
        date_inscription:req.body.date_inscription,
        id_commande:req.body.id_commande,
        id_evaluation_livreur:req.body.id_evaluation_livreur
    });
    
    await client.save().then(data => {
        res.send({
            message:"Client created successfully!!",
            client:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating client"
        });
    });
};
exports.findAll = async (req, res) => {
    
    try {
        clientModel.find((error, data) => {
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
//Find client by id
exports.findOne = async (req, res) => {
    try {
        const client = await clientModel.findById(req.params.id);
        res.status(200).json(client);
    } catch(error) {
        res.status(404).json({ message: "chui la"});
    }
};
// Update a client by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await clientModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Client not found.`
            });
        }else{
            res.send({ message: "Client updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a client with the specified id in the request
exports.destroy = async (req, res) => {
    await clientModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Client not found.`
          });
        } else {
          res.send({
            message: "Client deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};