document.addEventListener("DOMContentLoaded", function(){
    showPopup();
})

function showPopup(){
    document.getElementById("popup").style.display = 'flex';
}

function submitName(){
    const nameInput = document.getElementById('nameinput').value;

    if(nameInput.trim()===""){
        alert("Nama tidak boleh kosong");
    } else{
        document.getElementById('popup').style.display = 'none';
        document.getElementById("wellcomeMasage").innerHTML = "Hello " + nameInput + ", Wellcome to my prtofolio";
    }
}

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", function(){
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})

prev.addEventListener("click", function(){
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").prepend(items[items.length - 1])
})