
module.exports = function(sequelize, DataTypes) {
  
    var Clothing_item = sequelize.define("Clothing_item", {
      user_id: DataTypes.STRING,
      clean: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
      primary_color: DataTypes.STRING,
      accent_color: DataTypes.STRING,
      pattern: DataTypes.STRING,
    });
    Clothing_item.associate = function(models){
      Clothing_item.belongsTo(models.Outfit,{
        
      });
    };  
    
    return Clothing_item;
  };
