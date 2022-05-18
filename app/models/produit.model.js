var mongoose = require('mongoose');
    var schema = mongoose.Schema(
      {
        nom: String,
        categorie:String,
        description: String,
        ingredients:String,
        taille:String,
        photos:Array(),
        temps_de_preparatin:String,
        en_promo:Boolean,
        discount:Number,
        nbr_view:Number,
        nbr_like:Number,
        nbr_share:Number,
        nbr_sales:Number,
        id_menu:String
      },
      { timestamps: true }
    );

    module.exports = mongoose.model("produit", schema);