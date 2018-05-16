$(document).ready(function(){


$(document).on("submit", "#todo-form", createOutfits)

    var $outfit =;


    var outfits= [];
    

    getOutfit();


function getOutfit(){
    $.get("/api/outfits", function(data){
        outfit=data;

    });
}

function deleteOutfits(event){
    event.stopProgation();
    var userid = $(this).data("userID");
    $.ajax({
        method: "DELETE",
        url: "api/outfits" +userid
    }).then(getOutfits);

}


function updateOutfit(outfit){
    $.ajax({
        method: "PUT",
        url: "/api/outfits",
        data: outfit
    }).then(getOutfit);
}

function createOutfit(event){
    var outfit ={
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    };
    $.post("/api/outfits", outfit, getOutfit)
}



});