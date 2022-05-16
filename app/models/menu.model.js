module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        nom: String,
        description: String,
        photos:Array(),
        categorie:String,
        code_qr:String,
        nbr_view:Int32Array,
        nbr_like:Int32Array,
        nbr_share:Int32Array,
        nbr_sales:Int32Array,
        id_produit:String,
        id_restaurant:String
      },
      { timestamps: true }
    );

    schema.method("toJSON", function() {
      const { __v, _id} = this.toObject();
      object.id = _id;
      return object;
    });

    const Menu = mongoose.model("menu", schema);
    return Menu;
  };