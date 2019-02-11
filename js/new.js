var boutiqueItems = [];
function Item(description, image, price, size, array, id){
	this.description = description;
	this.image = image;
	this.price = price;
	this.size = size;
	this.id = id;
	pushToArray(array,this)
}
function pushToArray(array, item) {
	array.push(item);
}
//the dresses
new Item("Long lace sleveless dress", "https://img.etsystatic.com/il/d8dd1d/525727544/il_570xN.525727544_8d35.jpg?version=3", 150, 6, boutiqueItems, "item0");
new Item("Long sleeve lace dress with layered skirt", "https://img.etsystatic.com/il/844c86/553403966/il_570xN.553403966_62iv.jpg?version=2", 199, 4, boutiqueItems, "item1");
new Item("Short sleeve lace dress", "https://i.etsystatic.com/6697588/r/il/e38c1c/492015170/il_570xN.492015170_17u3.jpg", 140, 8, boutiqueItems, "item2");
new Item("White lace dress with lace top", "https://img.etsystatic.com/il/f920c1/514962741/il_570xN.514962741_jl0k.jpg?version=2", 140, 4, boutiqueItems,"item3");			
//tiaras
new Item("Pastel colored rose crown", "https://img.etsystatic.com/il/d00f01/1504792144/il_570xN.1504792144_lw30.jpg?version=0", 40, "one size fits all", boutiqueItems, "item4");
new Item("Gold diamond tiara", "https://img.etsystatic.com/il/0e27cf/686844752/il_570xN.686844752_4ubz.jpg?version=0", 249, "one size fits all", boutiqueItems, "item5");
new Item("Daisy twig crown", "https://img.etsystatic.com/il/b71a77/1566878636/il_570xN.1566878636_haat.jpg?version=0", 30, "one size fits all", boutiqueItems, "item6");
new Item("White gold crystal tiara", "https://i.etsystatic.com/5509510/r/il/22fb72/798270646/il_570xN.798270646_onz9.jpg", 199, "one size fits all", boutiqueItems, "item7");			
//shoes
new Item("Pearl golden sandals", "https://i.etsystatic.com/9054727/r/il/377948/883478396/il_570xN.883478396_8jmv.jpg", 99, "medium (6-8)", boutiqueItems, "item8");
new Item("Lace white pumps with lace bow", "https://img.etsystatic.com/il/853541/1291929305/il_570xN.1291929305_o4nx.jpg?version=0", 120, 7.5, boutiqueItems, "item9");
new Item("White lace pumps with lace ankle tie", "https://i.etsystatic.com/17801388/r/il/284ea7/1582553359/il_570xN.1582553359_brd0.jpg", 120, 8, boutiqueItems, "item10");
new Item("Lace clear booties", "https://img.etsystatic.com/il/34780b/1444547458/il_570xN.1444547458_1xp9.jpg?version=1", 100, 6, boutiqueItems, "item11");			
// jewelry
new Item("White gold diamond leaf necklace and earring set", "https://img.etsystatic.com/il/b8ccc7/1443661874/il_570xN.1443661874_gfbr.jpg?version=0", 200, "n/a", boutiqueItems, "item12");
new Item("White gold diamond bride jewelry set", "https://i.etsystatic.com/6152528/r/il/6af518/1192614061/il_570xN.1192614061_1a9f.jpg", 499, "n/a", boutiqueItems, "item13");
new Item("Gold diamond jewelry set", "https://i.etsystatic.com/9134559/r/il/5e34a7/1344857980/il_570xN.1344857980_67fi.jpg", 599, "n/a", boutiqueItems, "item14");
new Item("Gold diamond earrings", "https://i.etsystatic.com/9423854/r/il/47a692/1397767177/il_570xN.1397767177_k18h.jpg", 149, "n/a", boutiqueItems, "item15");
//CREATING THE HTML
for (var i = 0; i < boutiqueItems.length; i++) {
	var item = document.createElement("div");
		item.className = "col-sm-12 col-md-5 col-lg-3 mx-auto pb-5";
		item.id = boutiqueItems[i].id; 
		item.innerHTML += "<img src='"+ boutiqueItems[i].image +"' class='image w-100' alt='"+ boutiqueItems[i].description +"'> ";
		item.innerHTML += "<span>Description: " + boutiqueItems[i].description + "</span>";
		item.innerHTML += "<span>Size: " + boutiqueItems[i].size + "</span>";
		item.innerHTML += "<span>Price: " + boutiqueItems[i].price + "$</span>";
		item.innerHTML += "<button class='btn btn-warning' id='button"+ i +"' onclick='handleItem("+i+")'>Add to Cart</button>";
	var boutique = document.getElementById("items");
		boutique.appendChild(item);
}
var cart = [];
function handleItem(id) {
	if (cartContains(id)) {
	   removeFromCart(id);
	   updateButton(id, "Add to cart", "btn p-1 btn-warning");
	} else {
	   addToCart(id);
	   updateButton(id, "Remove from cart", "btn-danger btn p-1");
	}
document.getElementById("cartItems").innerText = cart.length;
}
function addToCart(id) {
	cart.push(id);
}
function removeFromCart(id) {
	cart.splice(cart.indexOf(id), 1);
}
function cartContains(id) {
	return cart.indexOf(id) > -1;
}
function updateButton(id, newText, classes) {
	document.getElementById("button" + id).innerText = newText;
	document.getElementById("button" + id).className = classes;
}
var itemsHTML=[];
var itemsTotal=0;
function viewItems() {
	document.getElementById("checkout").classList.remove("invis");
	var total=document.getElementById("itemTotals");
	var newItems=document.getElementById("itemDetails");
	document.getElementById("items").classList.add("invis");
	document.getElementById("mainContent").classList.add("invis");
	if (cart.includes(document.getElementById("item")+cart[i])){
			continue;
		}
	for (var i=0; i<cart.length; i++){
		itemsHTML.push(document.getElementById("item"+cart[i]).innerHTML);
	}
		newItems.innerHTML="<h4>Shopping Cart</h4>";
	for (var j=0; j<itemsHTML.length; j++){
		newItems.innerHTML+= "<div class='pb-3'>"+itemsHTML[j]+ "</div>";
	}
		total.innerHTML+="<h6>Order Summary:</h6><span>Items: "+ cart.length+"</span>";
		total.innerHTML+="<hr><span>Order Total: "+ 100 +"$</span><span>Shipping: Free</span>";
		total.innerHTML+="<span>Tax: 0.00$</span><span>Order Total: 100$</span>";
		total.innerHTML+="<button onclick='keepShopping();'>keep shopping</button>";
}
function keepShopping() {
	document.getElementById("items").classList.remove("invis");
	document.getElementById("mainContent").classList.remove("invis");
	document.getElementById("checkout").classList.add("invis");
}