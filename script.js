var imgDivs = document.getElementsByClassName("item-img");
var moveBtn = document.getElementById("btn");
var container = document.getElementById("container");
/*
container.style.height = imgDivs[0].clientHeight + 'px';*/




moveBtn.addEventListener("click",moveSlider);

var displayImg = [];
var hiddenImg =[];
displayImg[0] = "url('img/img1.jpg')";
displayImg[1] = "url('img/img2.jpg')";
displayImg[2] = "url('img/img3.jpg')";
hiddenImg[0] = "url('img/img4.jpg')";
hiddenImg[1] = "url('img/img5.jpg')";


setInterval(moveSlider,6000);
function moveSlider (){
    
    var element = displayImg.shift();
    displayImg.push(hiddenImg[0]);
    hiddenImg.shift();
    hiddenImg.push(element);
    for (let i = 0 ; i < imgDivs.length ; i++ ){
        imgDivs[i].style.backgroundImage = displayImg[i];
    }
}
