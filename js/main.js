var boutiqueItems = [];
var dress = [];
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
new Item("Long lace sleveless dress", "https://img.etsystatic.com/il/d8dd1d/525727544/il_570xN.525727544_8d35.jpg?version=3", 150, 6, boutiqueItems, "dresses");
new Item("Long sleeve lace dress with layered skirt", "https://img.etsystatic.com/il/844c86/553403966/il_570xN.553403966_62iv.jpg?version=2", 199, 4, boutiqueItems, "dresses");
new Item("Short sleeve lace dress", "https://i.etsystatic.com/6697588/r/il/e38c1c/492015170/il_570xN.492015170_17u3.jpg", 140, 8, boutiqueItems, "dresses");
new Item("White lace dress with lace top", "https://img.etsystatic.com/il/f920c1/514962741/il_570xN.514962741_jl0k.jpg?version=2", 140, 4, boutiqueItems,"dresses");			
//tiaras
new Item("Pastel colored rose crown", "https://img.etsystatic.com/il/d00f01/1504792144/il_570xN.1504792144_lw30.jpg?version=0", 40, "one size fits all", boutiqueItems, "tiaras");
new Item("Gold diamond tiara", "https://img.etsystatic.com/il/0e27cf/686844752/il_570xN.686844752_4ubz.jpg?version=0", 249, "one size fits all", boutiqueItems, "tiaras");
new Item("Daisy twig crown", "https://img.etsystatic.com/il/b71a77/1566878636/il_570xN.1566878636_haat.jpg?version=0", 30, "one size fits all", boutiqueItems, "tiaras");
new Item("White gold crystal tiara", "https://i.etsystatic.com/5509510/r/il/22fb72/798270646/il_570xN.798270646_onz9.jpg", 199, "one size fits all", boutiqueItems, "tiaras");			
//shoes
new Item("Pearl golden sandals", "https://i.etsystatic.com/9054727/r/il/377948/883478396/il_570xN.883478396_8jmv.jpg", 99, "medium (6-8)", boutiqueItems, "shoes");
new Item("Lace white pumps with lace bow", "https://img.etsystatic.com/il/853541/1291929305/il_570xN.1291929305_o4nx.jpg?version=0", 120, 7.5, boutiqueItems, "shoes");
new Item("White lace pumps with lace ankle tie", "https://i.etsystatic.com/17801388/r/il/284ea7/1582553359/il_570xN.1582553359_brd0.jpg", 120, 8, boutiqueItems, "shoes");
new Item("Lace clear booties", "https://img.etsystatic.com/il/34780b/1444547458/il_570xN.1444547458_1xp9.jpg?version=1", 100, 6, boutiqueItems, "shoes");			
// jewelry
new Item("White gold diamond leaf necklace and earring set", "https://img.etsystatic.com/il/b8ccc7/1443661874/il_570xN.1443661874_gfbr.jpg?version=0", 200, "n/a", boutiqueItems, "jewelry");
new Item("White gold diamond bride jewelry set", "https://i.etsystatic.com/6152528/r/il/6af518/1192614061/il_570xN.1192614061_1a9f.jpg", 499, "n/a", boutiqueItems, "jewelry");
new Item("Gold diamond jewelry set", "https://i.etsystatic.com/9134559/r/il/5e34a7/1344857980/il_570xN.1344857980_67fi.jpg", 599, "n/a", boutiqueItems, "jewelry");
new Item("Gold diamond earrings", "https://i.etsystatic.com/9423854/r/il/47a692/1397767177/il_570xN.1397767177_k18h.jpg", 149, "n/a", boutiqueItems, "jewelry");
//CREATING THE HTML
for (var i = 0; i < boutiqueItems.length; i++) {
	var itemArea = document.createElement("div");
		itemArea.className = "col-sm-12 col-md-5 col-lg-3 mx-auto pb-5";
		itemArea.id = boutiqueItems[i].id;
	var itemImage = document.createElement("img");
		itemImage.src = boutiqueItems[i].image;
		itemImage.className = "w-100 image";
		itemImage.alt = boutiqueItems[i].description;
	var itemDetails = document.createElement("div");
		itemDetails.innerHTML = "<i class='far fa-heart p-1'></i><br>";
		itemDetails.innerHTML += "<b>Description</b>: " + boutiqueItems[i].description + ".<br>";
		itemDetails.innerHTML += "<b>Size</b>: " + boutiqueItems[i].size + "<br>";
		itemDetails.innerHTML += "<b>Price</b>: " + boutiqueItems[i].price + "$<br>";
	var button = document.createElement("button");
		button.innerHTML = "Add to cart";
		button.className = "btn btn-warning";
		button.setAttribute("onclick", "handleItem("+ i +")");
		button.id = "button" + [i];
	var boutiqueDisplay = document.getElementById("items");
	boutiqueDisplay.appendChild(itemArea);
	itemArea.appendChild(itemImage);
	itemArea.appendChild(itemDetails);
	itemArea.appendChild(button);
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
function showItems() {
	alert("You have "  + cart.length + " items in your cart. Proceed to checkout?");
}