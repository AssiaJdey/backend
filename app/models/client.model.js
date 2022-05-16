var mongoose = require('mongoose');
    
var schema = mongoose.Schema(
      {
        nom_client: String,
        prenom_client:String,
        adresse:String,
        date_de_naissance:String,
        sexe:String,
        email:String,
        telephone:Number,
        photos_de_profil:Array(),
        photos_de_couverture:Array(),
        fonction:String,
        bio:String,
        reseau:Array(),
        banque:String,
        rib:String,
        credit:Number,
        date_inscription:String,
        id_commande:String,
        id_evaluation_livreur:String
      },
      { timestamps: true }
    );

    

    module.exports = mongoose.model("client", schema);
    
  