function totalPrice() {
    // gives the price output as a number
    let tableRow = document.getElementsByTagName('tr')
    console.log(tableRow)
    let tableCol = document.querySelectorAll('td#price') 
    console.log(tableCol)
    tableCol.forEach((button) => {
        button.addEventListener('click', ()=>{
        let priceText = button.innerHTML
        let priceNumber= parseFloat(priceText.replace("₦", ""))
        console.log(priceNumber)
        })
    });
}
totalPrice()

     // how to get the quantity input ; both are correct
 function calculateQuantity() {
 let quantity = document.querySelectorAll('#quantity')
//  for (let i = 0; i < quantity.length; i++) {
//      const att = quantity[i];
//      att.addEventListener('click', ()=>{
//         console.log(att.value)
//      })
//  }
    quantity.forEach(element => {
        element.addEventListener('click', ()=>{
            let quanValue = element.value
            console.log(quanValue)

        })
     });
}

calculateQuantity()


function amount() {
    // to give the total (price * quantity)
let TotalP = document.querySelectorAll('#total')
for (let i = 0; i < TotalP.length; i++) {
    const PriceText = TotalP[i].innerHTML;
    let PriceNumber = parseFloat(PriceText.replace('₦', ''))
    console.log(PriceNumber)
    
}
}













// let Rows = document.querySelector('tbody').querySelectorAll('tr')
//     let button = document.querySelectorAll('#times')
//     console.log(Rows)
//     button.forEach((timesButton, index) => {
//         timesButton.addEventListener('click', ()=>{
//             let buttonRow = Rows[index]
//             console.log(buttonRow)
//             buttonRow.style.display = "none")}