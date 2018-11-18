function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


var cart = [];

//{name:"Apple", price: 1.00, count: 1}
function addItem(name, price, count) {
    var item = { name: name, price: price, count: count };
    for (var i in cart){
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    cart.push(item);
}


