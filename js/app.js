// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.


var spanDtl = document.getElementById('details');

spanDtl.addEventListener('click',alertBox);


function alertBox() {
    window.alert('Not Available in Hawaii.');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var divName1 = document.getElementById('name1');
divName1.addEventListener('mouseover',addDesc);
divName1.addEventListener('mouseout',hideDesc);

var divDesc1 = document.getElementById('descrip1');

function addDesc() {
    divDesc1.style.display='block'
}

function hideDesc() {
    divDesc1.style.display='none'
}


//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


var divDesc2 = document.createElement('div');
divDesc2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
divDesc2.style.display='none';
name2.appendChild(divDesc2);
name2.addEventListener('click',onClickDesc);

function onClickDesc() {
    if (divDesc2.style.display==='none') {
        divDesc2.style.display='block'
    } else {
        divDesc2.style.display='none';
    }
    
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

var thumbsUpClass = document.getElementsByClassName('far fa-thumbs-up');

for (var i=0;i<thumbsUpClass.length;i++) {
    var thumbCntr = document.createElement('span');
    thumbCntr.className = 'likeCnt';
    thumbCntr.value = 0;
    thumbsUpClass[i].appendChild(thumbCntr);
}

// add event listeners thumbs up icons
for (var i=0; i<thumbsUpClass.length; i++) {
    thumbsUpClass[i].addEventListener('click', plusOne);
}

function plusOne() {
    this.querySelectorAll('.likeCnt')[0].value++;
    this.querySelectorAll('.likeCnt')[0].innerHTML = this.querySelectorAll('.likeCnt')[0].value;
}


//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

var priceInc = document.getElementsByClassName('far fa-plus-square');

for (var i=0; i<priceInc.length; i++) {
    priceInc[i].addEventListener('click', priceUp);
}

function priceUp() {
    var price = this.closest('div');
    price.childNodes[0].nodeValue = Number(price.innerText) + 100;
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

var priceDec = document.getElementsByClassName('far fa-minus-square');

for (var i=0; i<priceDec.length; i++) {
    priceDec[i].addEventListener('click', priceDown);
}

function priceDown() {
    var price = this.closest('div');
    price.childNodes[0].nodeValue = Number(price.innerText) - 100;
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

var imgSneakers = document.getElementsByTagName('img');
imgSneakers[6].addEventListener('mouseover',newColor);
imgSneakers[6].addEventListener('mouseout',oldColor);

function newColor() {
    imgSneakers[6].src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/(BRAND%20NEW)%20Jordan%2011%20Retro%20Heiress%20Black%20Stingray%20(GS).jpg';
}

function oldColor() {
    imgSneakers[6].src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg';
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

imgSneakers[7].addEventListener('click',makeBigger);

function makeBigger() {
    imgSneakers[7].style.width = (imgSneakers[7].width * 1.5) + 'px';
    imgSneakers[7].style.height = (imgSneakers[7].height * 1.5) + 'px';
}


//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

/* already done -- see q5 & q6 */

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

imgSneakers[9].addEventListener('click',cryingMeme);

function cryingMeme() {
    imgSneakers[9].src = 'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg'
}