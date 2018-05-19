module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define("Outfit", {
      top: DataTypes.STRING, // equal to id of clothing_item
      bottom: DataTypes.STRING,  // ^
      shoes: DataTypes.STRING, // ^
      date: DataTypes.DATE,
    });
    Outfit.hasMany(models.Clothing_item, {
      foreignKey : {user_id}
      // onDelete: "cascade"
    });
 
    return Outfit;
  };