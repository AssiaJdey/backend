const restaurantModel = require('../models/restaurant.model.js')

// Create and Save a new restaurant
exports.create = async (req, res) => {
    
    
   const restaurant = new restaurantModel({
        nom_resto:  req.body.nom_resto,
        nom_gerant:req.body.nom_gerant,
        matricule_fiscale:req.body.matricule_fiscale,
        adresse:req.body.adresse,
        position_gps:req.body.position_gps,
        email:req.body.email,
        telephone:req.body.telephone,
        date_de_convention:req.body.date_de_convention,
        photos:req.body.photos,
        id_menu:req.body.id_menu,
        id_evaluation_restaurant:req.body.id_evaluation_restaurant
    });
    
    await restaurant.save().then(data => {
        res.send({
            message:"Restaurant created successfully!!",
            restaurant:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating restaurant"
        });
    });
};
exports.findAll = async (req, res) => {
    
    try {
        restaurantModel.find((error, data) => {
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
//Find restaurant by id
exports.findOne = async (req, res) => {
    try {
        const restaurant = await restaurantModel.findById(req.params.id);
        res.status(200).json(restaurant);
    } catch(error) {
        res.status(404).json({ message: "chui la"});
    }
};
// Update a restaurant by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await restaurantModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Restaurant not found.`
            });
        }else{
            res.send({ message: "Restaurant updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a restaurant with the specified id in the request
exports.destroy = async (req, res) => {
    await restaurantModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Restaurant not found.`
          });
        } else {
          res.send({
            message: "Restaurant deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};