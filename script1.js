 //change background
    var background = ["img2.jpg","img4.jpg", "bg.jpg","bg2.jpg"];
    var btnbg = document.getElementById("btnbg");
    btnbg.addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * background.length-1);
        document.body.style.backgroundImage = "url(img/" + background[randomIndex] + ")"
    });  