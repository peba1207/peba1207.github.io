let slideIndex = [1, 1];
numSlides = [36, 27];
slideIndex.forEach(element => {
    showSlides(slideIndex[0]);
});

//next/previous controls
function plusSlides(n, game) {
    showSlides(slideIndex[game-1] += n, game);
    console.log("oh");
}

function showSlides(n, game) {
    var index = game-1;
    if(n < 1){slideIndex[index] = 1}

    //doesnt go past number of slides
    if(n > numSlides[index]){slideIndex[index] = numSlides[index]}

    console.log(numSlides[index]);
    document.getElementsByClassName("mySlide")[index].src = "images/battleshipGame" + game + "/turn"  + slideIndex[game-1] + ".png";
}