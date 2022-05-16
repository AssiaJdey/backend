module.exports = mongoose => {
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
        discount:Int32Array,
        nbr_view:Int32Array,
        nbr_like:Int32Array,
        nbr_share:Int32Array,
        nbr_sales:Int32Array,
        id_menu:String
      },
      { timestamps: true }
    );

    schema.method("toJSON", function() {
      const { __v, _id} = this.toObject();
      object.id = _id;
      return object;
    });

    const Produit = mongoose.model("produit", schema);
    return Produit;
  };