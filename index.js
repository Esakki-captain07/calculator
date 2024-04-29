let root = document.getElementById("root")


//create a wrapper div
let wrapper = document.createElement("div")
wrapper.setAttribute("class","box-wrapper")

//text-area

let lable = document.createElement("div")
lable.setAttribute("class","text-area")
let input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("readonly","true")
input.setAttribute("placeholder",0)
input.setAttribute("id","result")


//creat a container
let elements1 = document.createElement("div")
elements1.setAttribute("class","grid-container")

let clickButtons = ["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"]
clickButtons.forEach((lable)=>{
    let button = document.createElement("div")
    button.setAttribute("class","grid-item")
    button.innerText = lable
    button.addEventListener("click",()=>handleButtonClick(button.innerText))
    elements1.appendChild(button)
})



wrapper.append(lable,elements1)
lable.append(input)
root.append(wrapper)

let currentInput = ""

function handleButtonClick(value){
if (!isNaN(value) || value === '+' || value === '-' || value === '*' || value === '/' || value === 'C' || value === '=') {
        if(value ==="C"){
            clearDisplay()
        }
        else if(value === "="){
            claculate()
        }
        else{
            appendToDisplay(value)
        }
    }
}

function appendToDisplay(value){
    currentInput += value
    input.value = currentInput
}

function clearDisplay(value){
    currentInput = ""
    input.value = ""
}

function claculate(value){
    try{
        let result = eval(currentInput)
        input.value = result
        currentInput = result.toString()
    }
    catch (error){
        input.value = "error"

    }

}

document.addEventListener('keydown' , function(event){
    let key = event.key
    if(isNaN(key)){
        alert("Only numbers and operators are allowed!");

    } else {
        appendToDisplay(key)
    }
})