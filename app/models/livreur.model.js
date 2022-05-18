var mongoose = require('mongoose');
    var schema = mongoose.Schema(
      {
        nom_livreur: String,
        prenom_livreur:String,
        date_de_naissance:String,
        sexe:String,
        lieu:String,
        n_cin:Number,
        telephone:Number,
        matricule_fiscale:String,
        photos:Array(),
        date_de_convention:String,
        type_de_vehicule:String,
        zone_de_livraison:String,
        disponibilite:Boolean,
        banque:String,
        rib:String,
        credit:Number,
        id_commande:String,
        id_evaluation_livreur:String
      },
      { timestamps: true }
    );

    module.exports = mongoose.model("livreur", schema);