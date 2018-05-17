
module.exports = function(sequelize, DataTypes) {
  
    var Clothing_item = sequelize.define("Clothing_item", {
      user_id: DataTypes.STRING,
      type: DataTypes.STRING,
      img_url: DataTypes.STRING,
    });
    Clothing_item.associate = function(models){
      Clothing_item.belongsTo(models.Outfit,{
        
      });
    };  
    
    return Clothing_item;
  };
