module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id_produit:String,
        id_client:String,
        id_restaurant:String,
        id_livreur:String,
        prix_totale:Number,
        duree_estimee:String,
        duree_reel:String,
        date_de_lancemnt_de_la_commande:String,
        attente_resto:String,
        attente_livreur:String,
        estimation_resto:String,
        estimation_livreur:String,
        date_de_livraison:String
      },
      { timestamps: true }
    );

    schema.method("toJSON", function() {
      const { __v, _id} = this.toObject();
      object.id = _id;
      return object;
    });

    const Commande = mongoose.model("commande", schema);
    return Commande;
  };