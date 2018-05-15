$(document).ready(function(){

    var $outfits =;


    var outfits= [];
    

    getOutfits();


function getOutfits(){
    $.get("/api/outfits", function(data){
        outfits=data;

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


function updateOutfits(outfits){
    $.ajax({
        method: "PUT",
        url: "/api/outfits",
        data: outfits
    }).then(getOutfits);
}

function createOutfits(event){
    var outfits ={
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    };
    $.post("/api/outfits" outfits, getOutfits)
}



});