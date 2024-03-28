
let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#Todo");
let progressContainer = document.querySelector("#Progress");
let doneContainer = document.querySelector("#Done");


addCard.addEventListener("click", addTask)

function addTask()
{
    let card = document.createElement("div")
    card.className = "card"
    card.innerText = "Test Card"
    card.setAttribute("contenteditable", "true")
    card.setAttribute("draggable", "true")
    todoContainer.append(card)
    card.focus() // pointer in editable one automatically
    
    //empty card to be deleted automatically that is not focused ie, blur
    card.addEventListener("blur", (eventDetails)=> {
        let blurredCard = eventDetails.target
        if(blurredCard.innerText.trim() == "")
        { blurredCard.remove() }
    })

    //make default text empty when focus
    card.addEventListener("click", (eventDetails)=> {
        let clickedCard = eventDetails.target
        if(clickedCard.innerText == "Test Card")
        { clickedCard.innerText = ""}
    })


    card.addEventListener("dragstart", (eventDetails)=> {
        let draggedCard = eventDetails.target
        draggedCard.style.opacity = 0.5
    })

    card.addEventListener("dragend", (eventDetails)=> {
        let draggedCard = eventDetails.target
        draggedCard.style.opacity = 1
    })


    let dragEvents = ["dragover", "dragenter", "drop"]

    dragEvents.forEach((dropEvents)=>
    {
        let columns = document.querySelectorAll(".column")
        for (let c of columns) 
        {
            c.addEventListener(dropEvents, (eventDetails)=>{
                eventDetails.preventDefault()
            })
        }
    })


    
}



//