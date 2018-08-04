// a oa  klloohh
k, English + logic
// btw, this is not regular pseudo code - it's just some thoughts written out mixed as free-form and tabbed/indentated to look like code



function handleItem(id) {
    if (cart.indexOf(id) > -1) {
       removeFromCart(id);
       updateButton(id, "Add to cart");
    } else {
       addToCart(id);
       updateButton(id, "Remove from cart");
    }
}
       
function addToCart(id) {
    var index = cart.indexOf(id);
    if (index > -1) {
        cart = cart.slice(index, 1);
    }
}

function doThese() {
    console.log("Today is Friday");
    console.log("Weekend, baby!");
    
    var stuff = []; //  an array
    stuff.push("bla");
    console.log(stuff);
}

doThese();
// it will output the two messages in the console and the content of the "stuff" array

// run these in your console, and you'll see what I meant
var items = [3, 5, 8, 14, 29];
console.log("What index does have 3 in the items array?", items.indexOf(3));
console.log("What index does have 14 in the items array?", items.indexOf(14));
console.log("What index does have 30 in the items array?", items.indexOf(30));
