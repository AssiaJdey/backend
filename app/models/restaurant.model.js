var mongoose = require('mongoose');
    var schema = mongoose.Schema(
      {
        nom_resto: String,
        nom_gerant:String,
        matricule_fiscale:String,
        adresse:String,
        position_gps:String,
        email:String,
        telephone:Number,
        date_de_convention:String,
        photos:Array(),
        id_menu:String,
        id_evaluation_restaurant:String
      },
      { timestamps: true }
    );

    module.exports = mongoose.model("restaurant", schema);