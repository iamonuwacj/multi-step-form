let next = document.querySelector(".btn-next")
let step2Next = document.getElementById("step2-next")
let step3Next = document.getElementById("step3-next")
let confirm = document.querySelector(".confirm")

let itemPrice = document.getElementById("item-price")
let itemName = document.querySelector(".itemName")
let totalPrice = document.querySelector(".total_price")

let onlineChoice = document.querySelector("#online")
let largerChoice = document.getElementById("larger")
let addOnsChoice = document.getElementById("customise")

let step2Back = document.getElementById("step2-back")
let step3Back = document.getElementById("step3-back")
let step4Back = document.getElementById("step4-back")

let check = document.querySelectorAll(".check-inp")


let change = document.getElementById("change")
let arcadeYear = document.getElementById("arcade-year")

let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let step4 = document.getElementById("step4")
let step5 = document.getElementById("step5")

let monthly = document.querySelector(".row-monthly")
let yearly = document.querySelector(".row-yearly")
let formBtn = document.querySelector(".form-btn")

let selectMonthly = document.getElementById("monthly")
let selectYearly = document.getElementById("yearly")

let col1 = document.getElementById("col1")
let col2 = document.getElementById("col2")
let col3 = document.getElementById("col3")
let col4 = document.getElementById("col4")
let col5 = document.getElementById("col5")
let col6 = document.getElementById("col6")




let name_field = document.getElementById("name")
let email_field = document.getElementById("email")
let tel_field = document.getElementById("tel")
let name_error = document.getElementById("name_error")
let email_error = document.getElementById("email_error")
let tel_error = document.getElementById("phone_error")



let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")

let radio_btn = document.querySelector(".radios")

let userName = ""
let email = ""
let phone = ""

let total = 0
let selected = ""
let selectedValue = 9
let selectedContent = "Arcade"


num1.style.backgroundColor = "hsl(206, 94%, 87%)" // set the background color of the nums
num1.style.color = "black" // style for the numbering system


next.addEventListener("click", (e) => {
    e.preventDefault()
    if (userName === ""){
        name_error.textContent = "This field is required" // check for empty fields
    }else if(email === "") {
        email_error.textContent = "This field is required" // check for empty fields
    }else if(phone === ""){
        tel_error.textContent = "This field is required" // check for empty fields
    }else {
        step1.style.display = "none"
        step2.style.display = "block"
        num2.style.color = "black"
        num1.style.color = "white" // style for the numbering system
        num1.style.backgroundColor = "transparent" // set the background color of the nums
        num2.style.backgroundColor = "hsl(206, 94%, 87%)" // set the background color of the nums
        selectFunction()
        if (selected = yearly) {
            selectedValue = 15
            col4.addEventListener("click", () =>{
                col5.style.border = "2px solid hsl(229, 24%, 87%)"
                col6.style.border = "2px solid hsl(229, 24%, 87%)"
                col4.style.border = "2px solid hsl(228, 100%, 84%)"
            
                selectedValue = 15
                selectedContent = "Arcade"
            })
            col5.addEventListener("click", () =>{
                col4.style.border = "2px solid hsl(229, 24%, 87%)"
                col6.style.border = "2px solid hsl(229, 24%, 87%)"
                col5.style.border = "2px solid hsl(228, 100%, 84%)"
            
                selectedContent = "Advanced"
                selectedValue = 15
            })
            col6.addEventListener("click", () =>{
                col4.style.border = "2px solid hsl(229, 24%, 87%)"
                col5.style.border = "2px solid hsl(229, 24%, 87%)"
                col6.style.border = "2px solid hsl(228, 100%, 84%)"
            
                selectedContent = pro
                selectedValue = 15
            })
        }
    }
})

step2Next.addEventListener("click", (e) => {
    e.preventDefault()
    step2.style.display = "none"
    step3.style.display = "block"
    num1.style.backgroundColor = "transparent" // set the background color of the nums
    num2.style.backgroundColor = "transparent" // set the background color of the nums
    num3.style.backgroundColor = "hsl(206, 94%, 87%)"
    num3.style.color = "black"
    num2.style.color = "white"
    total += selectedValue
})

step3Next.addEventListener("click", (e) => {
    e.preventDefault()
    step3.style.display = "none"
    step4.style.display = "block"
    num1.style.backgroundColor = "transparent" // set the background color of the nums
    num3.style.backgroundColor = "transparent" // set the background color of the nums
    num4.style.color = "black"
    num3.style.color = "white"
    num4.style.backgroundColor = "hsl(206, 94%, 87%)"
    itemPrice.textContent = `$${selectedValue}/mo`
    itemName.textContent = `${selectedContent} (monthly)`
    SortCheckBox()
    totalPrice.textContent = `+$${total}/mo`
    
})

step2Back.addEventListener("click", (e) => {
    e.preventDefault()
    step2.style.display = "none"
    step1.style.display = "flex"
    num1.style.backgroundColor = "hsl(206, 94%, 87%)" // set the background color of the nums
    num2.style.backgroundColor = "transparent" // set the background color of the nums
    num3.style.backgroundColor = "transparent"
})

step3Back.addEventListener("click", (e) => {
    e.preventDefault()
    step3.style.display = "none"
    step2.style.display = "block"
    num1.style.backgroundColor = "transparent" // set the background color of the nums
    num2.style.backgroundColor = "hsl(206, 94%, 87%)" // set the background color of the nums
    num3.style.backgroundColor = "transparent"
})

step4Back.addEventListener("click", (e) => {
    e.preventDefault()
    step4.style.display = "none"
    step3.style.display = "block"
    num1.style.backgroundColor = "transparent" // set the background color of the nums
    num4.style.backgroundColor = "transparent" // set the background color of the nums
    num3.style.backgroundColor = "hsl(206, 94%, 87%)"
})


function InputEvents(){
    name_field.addEventListener("change", (e) => {
        userName = e.target.value
    })
    
    email_field.addEventListener("change", (e) => {
        email = e.target.value
    })
    
    tel_field.addEventListener("change", (e) => {
        phone = e.target.value
    })
    
    email_field.addEventListener("click", () => {
        email_error.textContent = ""
    })
    
    name_field.addEventListener("click", () => {
        name_error.textContent = ""
    })
    
    tel_field.addEventListener("click", () => {
        tel_error.textContent = ""
    })
}

InputEvents()

function selectFunction(){
    selected = "monthly"
    radio_btn.addEventListener("click", () => {
        if (selectYearly.checked === true){
            monthly.style.display = "none"
            yearly.style.display = "flex"
            formBtn.style.marginTop = "-40px"

            selected = "yearly"

        }else {
            yearly.style.display = "none"
            monthly.style.display = "flex"
            formBtn.style.marginTop = "0"

            selected = "monthly"
        }
    })

    if (selected === "monthly"){
        col1.addEventListener("click", () =>{
            col1.style.border = "2px solid hsl(228, 100%, 84%)"
            col2.style.border = "2px solid hsl(229, 24%, 87%)"
            col3.style.border = "2px solid hsl(229, 24%, 87%)"
        
            selectedValue = 9
        
        })

        col2.addEventListener("click", () =>{
            col1.style.border = "2px solid hsl(229, 24%, 87%)"
            col2.style.border = "2px solid hsl(228, 100%, 84%)"
            col3.style.border = "2px solid hsl(229, 24%, 87%)"
        
            selectedValue = 12
            selectedContent = "Advanced"
        
        })

        col3.addEventListener("click", () =>{
            col1.style.border = "2px solid hsl(229, 24%, 87%)"
            col2.style.border = "2px solid hsl(229, 24%, 87%)"
            col3.style.border = "2px solid hsl(228, 100%, 84%)"
        
            selectedValue = 15
            selectedContent = "pro"
        
        })
    }else{
        alert("Something went wrong")
    }
}

change.addEventListener("click", (e) => {
    e.preventDefault()
    step4.style.display = "none"
    step2.style.display = "block"
    num1.style.backgroundColor = "transparent" // set the background color of the nums
    num4.style.backgroundColor = "transparent" // set the background color of the nums
    num2.style.backgroundColor = "hsl(206, 94%, 87%)"
})

confirm.addEventListener("click", (e) => {
    e.preventDefault()
    step4.style.display = "none"
    step5.style.display = "flex"
    num4.style.backgroundColor = "transparent"

    // alert(total)
})


function SortCheckBox(){
    let checkedList = []
    for (let i = 0; i < check.length; i++){
        if (check[i].checked){
            checkedList.push(check[i].id)
        }
    }
    for (let i = 0; i < checkedList.length; i++){
        if(checkedList[i] === "online-box"){
            onlineChoice.style.display = "flex"
            total += 1
        }

        if(checkedList[i] === "larger-box"){
            largerChoice.style.display = "flex"
            total += 2
        }

        if(checkedList[i] === "addOns"){
            addOnsChoice.style.display = "flex"
            total += 2
        }
    }
}
