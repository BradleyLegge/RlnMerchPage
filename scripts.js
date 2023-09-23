let itemArray = [
    {
        name: 'Over-sized T-shirt',
        img: "./images/t-shirt.jpg",
        type: 'shortsleeve',
        price: '$14.99'
    },
    {
        name: 'Sweatshirt',
        img: "./images/sweatshirt.jpg",
        type: 'longsleeve',
        price: '$24.99'
    },
    {
        name: 'Beanie',
        img: "./images/beanie.jpg",
        type: 'hat',
        price: '$8.99'
    }
]

const listItem = document.querySelector("#list-item")

window.addEventListener("DOMContentLoaded", function() {
    let displayItem = itemArray.map(function (item) {
        return `<img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.price}</p>`
    })
    displayItem = displayItem.join("")
    listItem.innerHTML = displayItem 
})



