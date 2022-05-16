const menuModel = require('../models/menu.model.js')

// Create and Save a new menu
exports.create = async (req, res) => {
    
    
   const menu = new menuModel({
        nom:  req.body.nom,
        description: req.body.description,
        photos: req.body.photos,
        categorie: req.body.categorie,
        code_qr: req.body.code_qr,
        nbr_view: req.body.nbr_view,
        nbr_like: req.body.nbr_like,
        nbr_share: req.body.nbr_share,
        nbr_sales: req.body.nbr_sales,
        id_produit: req.body.id_produit,
        id_restaurant: req.body.id_restaurant
    });
    
    await menu.save().then(data => {
        res.send({
            message:"Menu created successfully!!",
            menu:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating menu"
        });
    });
};
exports.findAll = async (req, res) => {
    
    try {
        menuModel.find((error, data) => {
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
//Find menu by id
exports.findOne = async (req, res) => {
    try {
        const menu = await menuModel.findById(req.params.id);
        res.status(200).json(menu);
    } catch(error) {
        res.status(404).json({ message: "chui la"});
    }
};
// Update a menu by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await menuModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Menu not found.`
            });
        }else{
            res.send({ message: "Menu updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a menu with the specified id in the request
exports.destroy = async (req, res) => {
    await menuModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Menu not found.`
          });
        } else {
          res.send({
            message: "Menu deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};