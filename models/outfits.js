module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define("Outfit", {
      top: DataTypes.STRING, // equal to id of clothing_item
      bottom: DataTypes.STRING,  // ^
      shoes: DataTypes.STRING, // ^
    },{
      timestamps:true
    
      date: DataTypes.DATE,
      user_id: DataTypes.STRING
    });
    Outfit.associate = function(models){
      
      Outfit.hasMany(models.Clothing_item, {
        
        foreignKey : {allowNull: false},
        onDelete: "cascade"
      });
  };
 

    Outfit.associate = function(models){
      Outfit.hasMany(models.Clothing_item,{
        onDelete: "cascade" 
        
      });
    };
    return Outfit;
  
  };
