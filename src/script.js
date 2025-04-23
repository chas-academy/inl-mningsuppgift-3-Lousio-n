const addButton = document.getElementById("addButton")
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const cartList = document.getElementById("cartList")

const cart = []

addButton.addEventListener("click", () => {
    let name = productInput.value
    let price = priceInput.value
    let item = {productName: name, price: price, quantity: 1}
    checkList(item)
    productInput.value = ""
    priceInput.value = ""
    buildList(cart)
})


function checkList(newItem) {
    let itemFound = false
    for (let item of cart) {
        if (item.productName === newItem.productName) {
            itemFound = true
            item.quantity += 1
        }
    }

    if (!itemFound) {
        cart.push(newItem)
    }
}


function buildList(list) {
    console.log(list)
    cartList.replaceChildren("")
    for (let item of list) {
        let listItem = document.createElement("li")
        listItem.textContent = `${item.productName} - ${item.price}kr (x${item.quantity})`
        cartList.appendChild(listItem)
    }
}
