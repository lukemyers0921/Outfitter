module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define("Outfit", {
      top: DataTypes.STRING, // equal to id of clothing_item
      bottom: DataTypes.STRING,  // ^
      shoes: DataTypes.STRING, // ^
<<<<<<< Updated upstream
      date: DataTypes.DATE,
=======
    },{
      timestamps:true
    
>>>>>>> Stashed changes
    });
    return Outfit;
  };

  outfit.sync();