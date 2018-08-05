
// this is not a normal cart behaviour
// the intention is to prove how adding and removing works
// not
function handleItem(id) {
    if (cartContains(id)) {
       removeFromCart(id);
       updateButton(id, "Add to cart", "btn p-1 btn-warning");
    } else {
       addToCart(id);
       updateButton(id, "Remove from cart", "btn-danger btn p-1");
    }
}

//pushes the ids to the cart array
function addToCart(id) {
    cart.push(id);
}

//removes the item from the cart array
function removeFromCart(id) {
    cart.splice(cart.indexOf(id), 1);
}

function cartContains(id) {
    return cart.indexOf(id) > -1;
}

function updateButton(id, newText, class) {
    document.getElementById("button" + id).innerText = "newText";
    document.getElementById("button" + id).className = "class";
}

