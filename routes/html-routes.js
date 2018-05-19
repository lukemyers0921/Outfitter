var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/splashpage.html"));
  });
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  // add_clothing route loads the add_clothing.html page, allowes users to add clothes to database
  app.get("/add_clothing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add_clothing.html"));
  });

  // view_clothing route loads the view_clothing.html page, where all the user clothes are stored and gives them access to crud functions
  app.get("/view_clothing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view_clothing.html"));
  });

  // lets users schedule outfits to wear on a specific date
  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/calendar.html"));
  });

  // view_outfits route loads the view_outfits.html page, where all the user outfits are stored and gives them access to crud functions
  app.get("/view_outfits", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view_outfits.html"));
  });

  // laundry route loads the laundry.html where users can update clothes based on if they are clean or dirty
  app.get("/laundry", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/laundry.html"));
  });

   // generates outfits based on user selected parameters. the users can add those outfits to their outfit database.
   app.get("/outfit_generator", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/outfit_generator.html"));
  });
};