// var nom = prompt('Veuillez saisir votre nom :');
// alert('Bonjour ' + nom);

function ditBonjour(){
    alert('Bonjour tout le monde ☺');
}

function afficheBonjour(){
    var nom=document.querySelector('#varsaisie').value;
    console.log('le nom :', nom);
    document.querySelector('#czonesaisie').innerHTML = 'Bonjour à vous, ' + nom;
    
}

function detectAge(){
    var age = document.querySelector('#age').value;
    var infoage = document.querySelector('#infoage');
    if(age<18){
        
        document.querySelector('#infoage').innerHTML = "Vous êtes mineur."
        infoage.className = 'pred';
    }
    else{
        
        document.querySelector('#infoage').innerHTML = "Vous êtes majeur; <br><br>Vous serez redirigé dans 3 secondes ..."
        infoage.className = 'pgreen';
        setTimeout('redirectValid()', 3000);
    }
}

function redirectValid(){
    window.location = 'https://spongebob.fandom.com/wiki/Encyclopedia_SpongeBobia';
}


var image1 = new Image();
image1.src = 'http://iconfever.com/images/portfolio/spongebob.jpg';
var image2 = new Image();
image2.src = 'https://68.media.tumblr.com/224b047f3cda9ce60934e85d775c1155/tumblr_ois779GPQS1ttneowo4_500.png';

function anim1(){
    document.myImage.src = image2.src;
}
function anim2(){
    document.myImage.src = image1.src;
}


