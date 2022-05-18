var mongoose = require('mongoose');
    var schema = mongoose.Schema(
      {
        id_commande:String,
        cible:String,
        ev_resto:String,
        ev_livreur:String,
        score:Number,
        commentaire:String,
        date_heure:String
      },
      { timestamps: true }
    );

  
    module.exports = mongoose.model("evaluation_commande", schema);