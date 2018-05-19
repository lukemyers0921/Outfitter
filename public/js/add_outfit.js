$(document).ready(function () {
    var selectedFile;
    
    document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('#image');
                selectedFile = event.target.files[0];
                img.src = URL.createObjectURL(this.files[0]);
            }
        });
    
    $("#indexButton").click(function () {
       var type = $('#exampleFormControlSelect1 :selected').val();
       console.log(type);
        firebasePost("add_clothing", userid, selectedFile, type);

    });

    $("viewOutfit").click (function(){
        var type = $("#top", "bottoms", "shoes").val();
        console.log(type);
        
    })
});

