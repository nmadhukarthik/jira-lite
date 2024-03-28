
let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#Todo");
let progressContainer = document.querySelector("#Progress");
let doneContainer = document.querySelector("#Done");


addCard.addEventListener("click", addTask)

function addTask()
{
    let cardParentDiv = document.createElement("div")
    cardParentDiv.className = "cardParent"
    let card = document.createElement("div")
    card.className = "card"
    card.innerText = "Test Card"
    card.setAttribute("contenteditable", "true")
    cardParentDiv.append(card)
    todoContainer.append(cardParentDiv)
    card.focus() // pointer in editable one automatically
    
    //empty card to be deleted automatically that is not focused ie, blur
    card.addEventListener("blur", (eventDetails)=> {
        let blurredCard = eventDetails.target
        let parentOfBlurredCard = blurredCard.parentElement
        if(blurredCard.innerText.trim() == "")
        { parentOfBlurredCard.remove() }
    })

    //make default text empty when focus
    card.addEventListener("click", (eventDetails)=> {
        let clickedCard = eventDetails.target
        if(clickedCard.innerText == "Test Card")
        { clickedCard.innerText = ""}
    })


    let selector = document.createElement("select")
    // selector.innerHTML = `
    //     <option value="ToDo"> ToDo </option
    //     <option value="Progress"> Progress </option
    //     <option value="Done"> Done </option
    
    // `
    
    let option1 = document.createElement("option")
    option1.value = "Todo1"
    option1.innerText = "ToDo"
    selector.append(option1)

    let option2 = document.createElement("option")
    option2.value = "Progress1"
    option2.innerText = "Progress"
    selector.append(option2)

    let option3 = document.createElement("option")
    option3.value = "Done1"
    option3.innerText = "Done"
    selector.append(option3)

    cardParentDiv.append(selector)


    // different values of select and different id 
    let selectedIdMapping = 
    {
        Todo1: "Todo",
        Progress1: "Progress",
        Done1:  "Done"
    }
   
    selector.addEventListener("change", (eventDetails)=>{
        let selectedOption = eventDetails.target.value
        let selectedContainer = document.querySelector(`#${selectedIdMapping[selectedOption]}`)
        selectedContainer.append(cardParentDiv)
    })









}



//