
var slideshowMaker = function (type, data) {
    dataArray = []
    for (var i = 0; i < data.length; i++) {
        dataArray.push(data[i]);
        var slide = `<div class="mySlides" >
        <div class="numbertext">${i+1} / ${data.length}</div>
        <img src="${data[i].img_url}" height="300" width="200"><br>
        <div class="text"><p>Name</p>
        <div><button class = "btn btn-danger delete">Delete</button><button class = "btn btn-success add" id = "${type}${i}">Add to outfit</button></div>
        </div><br>
        
      </div>`
        $("#slideshow-container").append(slide);

    }
    showSlides(slideIndex);
    console.log(dataArray);


};
var getByType = function (type) {
    $.get(`/api/clothing_item/${userid.uid}/${type}`, function (data) {
        $("#slideshow-container").empty();
        $("#dots").empty();
        slideshowMaker(type, data);
    });
}
var outfitPlacer = function (id) {

    var i = id.replace(/\D/g, '');
    var type = id.replace(/[0-9]/g, '');
    var key = outfit[type]
    key= dataArray[i];
    $(`#${type}`).attr("src", `${key.img_url}`);
}

$(document).ready(function () {

    $(document).on("click", ".add", function () {
        outfitPlacer($(this).attr("id"))
    });
    
    $("#top").attr("src", `${outfit.top.img_url}`);
    $("#bottom").attr("src", `${outfit.bottom.img_url}`);
    $("#shoes").attr("src", `${outfit.shoes.img_url}`);
    $("#hat").attr("src", `${outfit.hat.img_url}`);
    $("#bag").attr("src", `${outfit.bag.img_url}`);
    $("#toptwo").attr("src", `${outfit.toptwo.img_url}`);
    setTimeout(function () {
        getByType("top");
    }, 500);
    $("#indexButton").click(function () {
        var type = $('#exampleFormControlSelect1 :selected').val();
        getByType(type);

    });
    $("#indexSubmit").click(function () {
        // route should go here
        

    });
});

var outfit = {
    top: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/top.png",
        type: "top",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
    bottom: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/bottom.png",
        type: "bottom",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
    shoes: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/shoes.png",
        type: "shoes",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
    bag: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/bag.png",
        type: "bag",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
    toptwo: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/toptwo.png",
        type: "toptwo",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
    hat: {
        createdAt: "newDate()",
        id: 999,
        img_url: "../images/default/hat.png",
        type: "hat",
        updatedAt: "newDate()",
        user_id: "Outfitter"
    },
}
var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
