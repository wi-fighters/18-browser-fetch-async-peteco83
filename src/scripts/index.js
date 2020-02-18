import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
const button = document.getElementById("continue");


let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, 60000);
});

async function funcPromise () {
    let modal = await promiseOfModal
    modal.style.display = "block"
}
funcPromise()

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


let buttonPromise = new Promise(function (resolve, reject) {
   
        setTimeout(() => {  
           
            resolve("Please subscribe")
        }, 250)
   
})

async function popup() {
    button.style.backgroundColor = "red"
    let popup = await buttonPromise
    
    alert(popup)
    
}

button.addEventListener("mouseout", popup)
