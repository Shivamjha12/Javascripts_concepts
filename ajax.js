console.log("Ajax calculator");
// let x = document.getElementById('input_space1');
// let y = document.getElementById('input_space2');
let a = document.getElementById('ansButton');
a.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("You clicked on button")
    const xhr = new XMLHttpRequest();
    xhr.open('GET','welcome_greet.txt', true);


    xhr.onprogress = function(){
        console.log("Your calculation is in progress")
    }

    xhr.onload = function(){
        // ${resultAlert}.val() = here is sum
        console.log(this.responseText)
    }

    xhr.send();
}