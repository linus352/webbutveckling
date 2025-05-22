let förnamn= document.getElementById("förnamn")
let efternamn= document.getElementById("efternamn")
let resultat= document.getElementById("resultat")
let text = document.getElementById("text")
let isClicked = false

function changeText() {

    if (isClicked == true) {
        isClicked = false
        text.innerHTML = "Nej"
    } else {
        text.innerHTML = "Ja"
        isClicked = true
    }
}

function skapaMail(){
    resultat.innerHTML= förnamn.value + "." + efternamn.value + "@gmail.com"
}