const inputText = document.querySelector("#txt")
const myButton = document.querySelector(".btn-list")
const list = document.querySelector(".container ol")

let startPage = 0
let endPage = 100
let pages = endPage - startPage


myButton.addEventListener("click", (e) => {
    if(inputText.value != "") {
        e.preventDefault()

        const myLi = document.createElement("li")
        myLi.innerHTML = inputText.value.concat(", ")
        list.appendChild(myLi)

        const myTest = document.createElement("text")
        myTest.innerHTML = " "
        myLi.appendChild(myTest)

        const mySpan = document.createElement("span")
        mySpan.innerHTML = "x"
        myLi.appendChild(mySpan)
    }

    const close = document.querySelectorAll("span")
    for (let i=  0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            
            close[i].parentElement.style.opacity = 0
            setTimeout(() => {
                close[i].parentElement.style.display = "none"
                close[i].parentElement.remove()
                updateList()
            }, 100)
        })
    }
    updateList()
})


function updateList() {
    startPage = Number(document.getElementById("sPage").value)
    endPage = Number(document.getElementById("ePage").value)

    const listShowing = document.querySelectorAll("text")
    for (let i =  0; i < listShowing.length; i++) {
        var beginPart = startPage + i * divvyUp(listShowing)
        var endPart = startPage + (i + 1) * divvyUp(listShowing) - 1

        if (i == listShowing.length - 1) {
            endPart = endPage
        }

        listShowing[i].innerHTML = "page " + beginPart.toString().concat(" to ").concat(endPart.toString()).concat(" ")
    }
}

function divvyUp(listShowing) {
    var totalPages = endPage - startPage + 1
    if (listShowing.length - 1 > 0) {
        var remainderPages = totalPages % listShowing.length
        var pagesPerParticipant = (totalPages - remainderPages) / listShowing.length
    } else {
        var pagesPerParticipant = totalPages
    }
    return pagesPerParticipant
}