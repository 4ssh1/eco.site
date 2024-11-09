// the function to show the menu when the triangle image is clicked

function showSide() {
    let nav = document.getElementById('navbar');
    nav.style.display = 'flex';
}

// the function to remove the image when the cancel button is clicked 
function hideSide() {
    let nav = document.getElementById('navbar');
    nav.style.display = 'none';
}

// subshop

let mainImg = document.querySelector('.main_image > img');
let smallImg = document.querySelectorAll('.sub_shop_images > .img_small');
smallImg.forEach(imgCont => {
let img = imgCont.querySelector('img')
// console.log(img) never do that
img.addEventListener("click", e => {
    // console.log("this image is click")
    mainImg.src = img.src
})
})

// cart page functions


//function to remove cart rows
function RemoveCartRow() {
    let button = document.querySelectorAll('.times')
    let Rows = document.querySelector('tbody').querySelectorAll('tr')
    console.log(Rows)
    button.forEach((timesButton, index) => {
        timesButton.addEventListener('click', ()=>{
            let buttonRow = Rows[index]
            // console.log(index)
            // console.log(buttonRow)
            buttonRow.style.display = "none"
        })
        });
}

RemoveCartRow()


     // how to get the quantity input ; both are correct
function calculateQuantity() {
    let quantity = document.querySelectorAll('.quantity')
    quantity.forEach(element => {
        element.addEventListener('click', ()=>{
            let quanValue = element.value
            console.log(quanValue)
       })
     });
}

calculateQuantity()

function updatedPrice() {
    let rows = document.querySelector('tbody').querySelectorAll('tr');
    let sum = 0;
    rows.forEach(element => {
        let prices = element.querySelector('.price');
        console.log(`consoling price text = ${prices.innerText}`, prices)
        let price = parseFloat(prices.innerText.replace('₦', ''));
        let quantity = element.querySelector('.quantity').value;
        let value = (price * quantity).toFixed(2)
        sum+= parseInt(value, 10)
        element.querySelector('.total').innerHTML = `₦ ${value}`
    });
    let cartS = document.querySelector('.cart_price')
    cartS.innerText = `₦ ${sum}`
    let shop_total = document.querySelector('.shop_total')
    shop_total.innerText = `₦ ${sum}`
}

document.querySelectorAll('input.quantity').forEach(e => {
    // e.addEventListener('change', updatedPrice)
    e.addEventListener('change', () => {
        updatedPrice()
    })
})


