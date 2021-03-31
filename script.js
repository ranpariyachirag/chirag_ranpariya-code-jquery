$(document).ready(function(){

    if($(".province-header").hasClass("clicked")){

         $(".clicked").children("span").html('<img src="./assets/arrow-circle-up.png" alt="dropdown menu up arrow">');
       }

       $(".province-header").click(function(){

          if($(this).next(".province-body").hasClass("opened")){
             $(this).removeClass("clicked")
            $(this).next(".province-body").removeClass("opened").slideUp();
            $(this).children("span").removeClass('up-arrow').addClass('down-arrow');
           $(this).children("span").html('<img src="./assets/arrow-circle-down.png" alt="dropdown menu down arrow">');
          }
        else{

         $(".province .province-body").removeClass("opened").slideUp();
          $(this).removeClass("clicked")
         $(".province .province-header span").removeClass('up-arrow').addClass('down-arrow');
         $(".province .province-header span").html('<img src="./assets/arrow-circle-down.png" alt="dropdown menu down arrow">');

         $(this).next(".province-body").addClass("opened").slideDown();
          $(this).addClass("clicked")
         $(this).children("span").removeClass('down-arrow').addClass('up-arrow');
         $(this).children("span").html('<img src="./assets/arrow-circle-up.png" alt="dropdown menu up arrow">');
         }
    })
})