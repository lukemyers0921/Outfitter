var imagemaker = function(type,data){
    for(var i  = 0; i < data.length; i++) {
        var image = `<img src = ${data[i].img_url} height="125" width="100">`
        $(`#${type}`).append(image);
    }
};
setTimeout(function(){
    $.get(`/api/clothing_item/${userid.uid}/top`, function(data) {
        console.log(data);
        imagemaker("top",data);
    });
    $.get(`/api/clothing_item/${userid.uid}/bottom`, function(data) {
        console.log(data);
        imagemaker("bottom",data);
    });
    $.get(`/api/clothing_item/${userid.uid}/shoes`, function(data) {
        console.log(data);
        imagemaker("shoes",data);
    });
}, 500); 