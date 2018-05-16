module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define("Outfit", {
      top: DataTypes.STRING, // equal to id of clothing_item
      bottom: DataTypes.STRING,  // ^
      shoes: DataTypes.STRING, // ^
    },{
      timestamps:true
    
    });

    Outfit.associate = function(models){
      Outfit.hasMany(models.Clothing_item,{
        onDelete: "cascade" 
        
      });
    };
    return Outfit;
  
  };
