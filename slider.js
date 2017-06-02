immaginiJSON = {
    immagini: [
        {
            url: "1.jpg",
        },
        {
            url: "2.jpg",
        },
        {
            url: "3.jpg",
        },
        {
            url: "4.jpg",
        }
    ]
}

var slideIndex = 0;

function showAll(index) {
    console.log(index);
    console.log(immaginiJSON.immagini[index].url);
    str = ' <img class="mySlides" src="' + immaginiJSON.immagini[index].url + '" /> ';

    this.sliderIndex = index;
    console.log("n show: " + slideIndex);
/*
    for (var i = 0; i < immaginiJSON.immagini.length; i++) {
        console.log("sono nel for");
        str = ' <img class="mySlides" src="' + immaginiJSON.immagini[i].url + '" /> ';
        document.getElementById("slider").innerHTML += str;
    }
*/


    var prev = '<div class="prev" onclick="minusDivs('+ sliderIndex +')"> < </div>';
    var next = '<div class="next" onclick="plusDivs('+ sliderIndex +')"> > </div>';

    document.getElementById("slider").innerHTML = str + prev + next;
}


function minusDivs(n) {
    console.log("andiamo indietro.");
    console.log("n minus: " + n);
    if (n == 0) {
        slideIndex = immaginiJSON.immagini.length - 1;
        console.log("minus slideIndex: " + slideIndex);
        showAll(immaginiJSON.immagini.length - 1);
    }
    if (n > 0 && n < immaginiJSON.immagini.length) {
        slideIndex = n - 1;
        console.log("minus slideIndex: " + slideIndex);
        showAll(n - 1);
    }
}
function plusDivs(n) {
    console.log("andiamo avanti.");

    if (n == immaginiJSON.immagini.length - 1) {
        slideIndex = 0;
        console.log("plus slideIndex: " + slideIndex);
        showAll(0);
    } else {
        slideIndex = n + 1;
        console.log("plus slideIndex: " + slideIndex);
        showAll(n + 1);

    }
}



function showDivs(n) {

    if (n < 1) {
        slideIndex = immaginiJSON.immagini.length;

    }
    if (n > immaginiJSON.immagini.length) {
        slideIndex = 1;
    }

    for (var j = 0; j < immaginiJSON.immagini.length; j++) {

    }
}

/*
var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

*/