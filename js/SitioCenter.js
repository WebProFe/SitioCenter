


  var interval = 5000;
  var random_display = 0; 
  var imageDir = "imgs/slideimgs/";
  var imageNum = 0;
  imageArray = new Array();
  imageArray[imageNum++] = new imageItem( imageDir + "homephoto.png" );
  imageArray[imageNum++] = new imageItem( imageDir + "sitiocenter1.jpg" );
  imageArray[imageNum++] = new imageItem( imageDir + "sitiocenter2.jpg" );
  var totalImages = imageArray.length;



  function imageItem(image_location){
    this.image_item = new Image();
    this.image_item.src = image_location;
  }

  function get_ImageItemLocation(imageObj){
    return(imageObj.image_item.src)
  }

  function randNum(x,y){
    var range = y - x + 1;
    return Math.floor(Math.random() * range) + x;
  }

  function getNextImage(){
    if (random_display){
      imageNum = randNum(0, totalImages - 1);
    } else {
      imageNum = (imageNum + 1 )% totalImages
    }
    var new_image = get_ImageItemLocation(imageArray[imageNum]);

    return(new_image);
  }

  function getPrevImage(){
    imageNum = (imageNum - 1) % totalImages;

    var new_image = get_ImageItemLocation(imageArray[imageNum]);

    return(new_image);
  }

  function prevImage(place){
    var new_image = getPrevImage();
    document[place].src = new_image;
  }

  function switchImage(place){
    var new_image = getNextImage();
    document[place].src = new_image;
    var recur_call = "switchImage('"+ place + "')";
    timerID = setTimeout(recur_call, interval);

  }

  function imageFade(){
    var images = $(".imgs");
    

    setInterval(function(){
      images.toggleClass("fadeIn");
    }, 3000)
  }
  imageFade();


$(document).ready(function(){
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({

          scrollTop: $(hash).offset().top
        }, 800, function(){
    
          window.location.hash = hash;
        });
      } 
    });
});



// animation:fading 5s infinite;

// }
//    @keyframes fading {0%{opacity: 1}50%{opacity: .66;}100%{opacity: 0;}};



// function mobile(){

// var mobileNav = document.querySelector(".mobileNav");
// var bottomNav = document.querySelector(".bottomNav");
// var scroll = document.querySelector(".scroll");

// mobileNav.addEventListener("click", function(){
//     if (bottomNav.style.display === "none") {
//         scroll.style.transition = "all 2s";;

//         bottomNav.style.display = "block";

//     } else {
//         bottomNav.style.display = "none";

//     }
// });
// }
