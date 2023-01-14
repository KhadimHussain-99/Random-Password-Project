const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass-box1")
let passEl2 = document.getElementById("pass-box2")

function getRandomCharacter() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword1 = " "
        for (let i = 0; i < 15 ; i++){
            randomPassword1 += getRandomCharacter()
        }
    passEl1.textContent = randomPassword1

    let randomPassword2 = " "
        for (let i = 0; i < 15 ; i++){
            randomPassword2 += getRandomCharacter()
        }
    passEl2.textContent = randomPassword2
}
