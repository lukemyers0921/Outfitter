// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the clothing_item
  // app.get("/api/clothing_item", function(req, res) {
  //   var query = {};
  //   if (req.query.user_id){
  //     query.User_Id =req.query.user_id;
  //   }
  //   // findAll returns all entries for a table when used with no options
  //   db.Clothing_item.findAll({
  //     where: query,
  //     include: [db.Outfit]
  //   }).then(function(dbClothing_item) {
  //     // We have access to the clothing_item as an argument inside of the callback function
  //     res.json(dbClothing_item);
  //   });
  // });
  // app.get("/api/clothing_item/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Clothing_item.findOne({
  //     where: {
  //       userid: req.params.userid
  //     },
  //     include: [db.Outfit]
  //   }).then(function(dbClothing_item) {
  //     res.json(dbClothing_item);
  //   });
  // });


  // // POST route for saving a new Clothing_item
  // app.post("/api/clothing_item", function(req, res) {
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property
  //   db.Clothing_item.create({
  //     user_id: req.body.user_id,
  //     type: req.body.type,
  //     primary_color: req.body.primary_color,
  //     accent_color: req.body.accent_color,
  //     pattern: req.body.pattern,
  //   }).then(function(dbClothing_item) {
  //     // We have access to the new Clothing_item as an argument inside of the callback function
  //     res.json(dbClothing_item);
  //   });
  // });

  // // DELETE route for deleting clothing_item. We can get the id of the Clothing_item to be deleted from
  // // req.params.id
  // app.delete("/api/clothing_item/:id", function(req, res) {
  //   // We just have to specify which Clothing_item we want to destroy with "where"
  //   db.Clothing_item.destroy({
  //     where: {
  //      userid: req.params.userid
  //     }
  //   }).then(function(dbClothing_item) {
  //     res.json(dbClothing_item);
  //   });

  // });

  // // PUT route for updating clothing_item. We can get the updated Clothing_item data from req.body
  // app.put("/api/clothing_item", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Clothing_item.update({
  //     top: req.body.top,
  //     bottom: req.body.bottom,
  //     shoes: req.body.shoes,
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbClothing_item) {
  //     res.json(dbClothing_item);
  //   });
  // });

  app.get("/api/outfit", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Outfit.findAll({
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      // We have access to the outfit as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });
  app.get("/api/outfit", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Outfit.findOne({
      where: {
        userid: req.params.userid
      },
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      // We have access to the outfit as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });

  // POST route for saving a new Outfits
  app.post("/api/outfit", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Outfit.create({
      userid: req.body.userid,
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    }).then(function(dbOutfit) {
      // We have access to the new Outfits as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });

  // DELETE route for deleting outfit. We can get the id of the Outfits to be deleted from
  // req.params.id
  app.delete("/api/outfit/:id", function(req, res) {
    // We just have to specify which Outfits we want to destroy with "where"
    db.Outfit.destroy({
      where: {
        userid: req.params.userid
      },
      include:[db.Clothing_item]
    }).then(function(dbOutfit) {
      res.json(dbOutfit);
    });

  });

  // PUT route for updating outfit. We can get the updated Outfits data from req.body
  app.put("/api/outfit", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Outfit.update({
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    }, {
      where: {
        userid: req.params.userid
      },
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      res.json(dbOutfit);
    });
  });
};
