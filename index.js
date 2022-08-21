const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



pass=document.getElementById("password") 
let passwordLength = 12

function getRandomCharacter() {
    let randomCharAt = Math.floor(Math.random() * characters.length)
    return characters[randomCharAt]
}


function passGenerator(){
    let rand1=""
        for(let i=0; i<passwordLength; i++){
        rand1+=getRandomCharacter()
        } 
   
pass.innerText =rand1
}


//console.log("Here is a random password: ", passGenerator())



