let beloded = document.getElementById("ded")
let arhipenko = document.getElementById("arhipenko")
let barik = document.getElementById("barik")
beloded.addEventListener("mouseover", () => {
    document.querySelector("#discription").style.display = "block"
})
arhipenko.addEventListener("click", () => {
    document.querySelector("#arhipenko").style.outline = "10px  solid red"
})
barik.addEventListener("mouseover", () => {
    document.querySelector("#barik").src = 'img/jilyak.jpg'
})

barik.addEventListener("mouseout", () => {
    document.querySelector("#barik").src = 'img/barik.jpg'
})

document.querySelector('button').addEventListener('click', ()=> {
    let write = document.querySelectorAll('.pole')
    for ( let i=0; i<write.length; i++) {
        if ( write[i] != ''){
            let list = document.createElement("li")
            list.innerHTML = write[i].value
            document.getElementById("footer").append(list)
        }
    }
})