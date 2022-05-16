module.exports = mongoose => {
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

    schema.method("toJSON", function() {
      const { __v, _id} = this.toObject();
      object.id = _id;
      return object;
    });

    const Evaluation_commande = mongoose.model("evaluation_commande", schema);
    return Evaluation_commande;
  };