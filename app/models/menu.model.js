var mongoose = require('mongoose');
    var schema = mongoose.Schema(
      {
        nom: String,
        description: String,
        photos:Array(),
        categorie:String,
        code_qr:String,
        nbr_view:Number,
        nbr_like:Number,
        nbr_share:Number,
        nbr_sales:Number,
        id_produit:String,
        id_restaurant:String
      },
      { timestamps: true }
    );

    module.exports = mongoose.model("menu", schema);