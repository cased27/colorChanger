var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", function() {
    if(isPurple){
        body.style.background = "white";
        isPurple = false;
    }
    else {
        body.style.background = "purple";
        isPurple = true;
    }
});

    //isPurple = !isPurple   this is a shortcut to eliminate the isPurple = t/f above
    //another shortcut would be to add a CSS class "purple" with background purple
        //then you would have the below:

        // button.addEventListener("click", function() {
        //     body.classList.toggle("purple");
        // });

