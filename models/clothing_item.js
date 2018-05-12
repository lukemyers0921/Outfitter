module.exports = function(sequelize, DataTypes) {
    var Clothing_item = sequelize.define("Clothing_item", {
      user_id: DataTypes.STRING,
      clean: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
      primary_color: DataTypes.STRING,
      accent_color: DataTypes.STRING,
      pattern: DataTypes.STRING,
    });
    return Clothing_item;
  };
//   clothing_item {
//     id:
//     clean: boolean
//     type: string
//     primary-color: string
//     accent-color: string
//     pattern: solid,spot,stripe, plaid
//     x: INT
//     y: INT
// }