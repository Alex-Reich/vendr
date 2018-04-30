var products = [{
    name: "Mt Dew",
    price: .75,
    stock: 17
},{
    name: "Cheetos",
    price: 1.75,
    stock: 2
}]



function drawProducts(){
    var template = ""
    for (let i = 0; i < products.length; i++) {
        var product = products[i];
        template += `<button onclick="handleProductButton(${i})">${product.name} - $${product.price}</button>`
    }
    document.getElementById("buttons-container").innerHTML = template
}

function handleProductButton(index) {

}