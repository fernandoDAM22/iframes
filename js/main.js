/*Variables */
const iframe = document.querySelector("#information");
const imgDark = document.querySelector('#change-mode');
const links = document.querySelectorAll(".link");
let dark = false;
/*Assing the eventListener to the links */
links.forEach(function(element){
    element.addEventListener("click",open);
});
/*This function allows us open the iframe*/
function open(e){
    e.preventDefault();
    iframe.src = e.target.href;
}
$(function(){
    //Open the menu
    $("#open").click(function(){
        $(this).delay(100).fadeOut();
        $("#menu-id").animate({
            marginLeft: "0px"
        },1200)
    });
    //Close the menu
    $("#close").click(function(){
        $("#menu-id").animate({
            marginLeft: "-305px"
        },1200,function(){
            $("#open").fadeIn();
        })
    });
    //remove the iframe
    $("#reload").click(function(){
        iframe.src = "";
    })
    //refresh the page
    $("#refresh").click(function(){
        location.reload();
    });
    //change the mode
    $("#change-mode").click(function(){
        if(dark == false){
            darkMode();
            dark = true;
            imgDark.src = "/img/light_mode_FILL1_wght400_GRAD0_opsz48.svg"
        }
        else{
            lightMode();
            dark = false;
            imgDark.src = "/img/dark_mode_FILL1_wght400_GRAD0_opsz48.svg";
        }
    });
});
/**This function allows us change to the dark mode */
function darkMode(){
   $("body").css("background-color","#1A1A40");
   $(".menu").css("background-color","#270082");
   $(".link").css("color","white");
   $("hr").css("border-color","white");
   $(".controls").css("filter","invert(1)");
}
/*This function change to the light mode */
function lightMode(){
    $("body").css("background-color","#edf2f4");
    $(".menu").css("background-color","#ef233c");
    $(".link").css("color","black");
    $("hr").css("border-color","black");
    $(".controls").css("filter","invert(0)");
}
